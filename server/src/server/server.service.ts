import { Inject, Injectable, LoggerService } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { Client } from "../implementation/client";
import { Entity, EntityType } from "../implementation/entities/entity";
import { Mob } from "../implementation/entities/mobs/mob";
import { Player } from "../implementation/entities/player";
import { Spawner } from "../implementation/entities/spawner";

/** The main server service
 *
 * The server service manages the server state. It is responsible for
 * managing and updating connected clients, processes existing entities,
 * and implements the server tick loop.
 *
 * It is a subject to future refactiorization - it should be split up into
 * client management and entity processing part.
 */
@Injectable()
export class ServerService {
  static readonly MS_PER_TICK = 200;
  static readonly MS_PER_HEARTBEAT = 1000;
  static readonly MS_HEARTBEAT_TIMEOUT = 3000;

  private clients: Map<string, Client>;
  private entities: Map<string, Entity>;
  private tick: number;

  /** The number of existing entities */
  get entityCount(): number {
    return this.entities.size;
  }

  constructor(
    private eventEmitter: EventEmitter2,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private logger: LoggerService
  ) {
    this.clients = new Map();
    this.entities = new Map();
    this.tick = 0;

    const spawner = new Spawner(0, 0);
    this.entities.set(spawner.id, spawner);
  }

  /**
   * Register a new client
   *
   * The client will be registered with the server and a player entity will be created for them
   * @param clientSocket The client's WebSocket connection instance
   * @param playerName The name of the player
   * @returns The UUID of the newly registered client
   */
  public registerClient(clientSocket: WebSocket, playerName: string): string {
    const client = new Client(clientSocket);
    const player = new Player(client.id, playerName);
    client.player = player;

    this.clients.set(client.id, client);
    this.logger.log(`Player ${playerName} joined (${client.id})`);
    this.updateClient(client);
    return client.id;
  }

  /**
   * Remove a client from the server
   *
   * The client will be removed from the server and their player entity will be despawned
   * @param id The UUID of the client
   */
  public removeClient(id: string): void {
    const name = this.clients.get(id).player.name;
    this.clients.delete(id);
    this.entities.delete(id);
    this.eventEmitter.emit("entity.despawn", { id });
    this.logger.log(`Player ${name} left (${id})`);
  }

  /**
   * Process a heartbeat from a client
   * @param id The UUID of the client
   */
  public receiveHeartbeat(id: string): void {
    if (!this.clients.has(id)) return;
    this.clients.get(id).heartbeat();
    this.logger.debug(`Heartbeat (${id})`);
  }

  /**
   * Spawn a player in the game
   *
   * The client must be registered with the server before calling this method
   * @param id The UUID of the client
   */
  public spawnPlayer(id: string): void {
    if (!this.clients.has(id)) return;
    const client = this.clients.get(id);
    const player = client.player;
    this.entities.set(player.id, player);
    this.eventEmitter.emit("entity.spawn", {
      id: player.id,
      entity: EntityType.PLAYER,
      x: player.x,
      y: player.y
    });
    this.logger.verbose(`Spawned player ${player.name} (${player.id})`);
  }

  /**
   * Spawn an entity in the game
   * 
   * @param entity The entity to spawn
   */
  public spawnEntity(entity: Entity): void {
    this.entities.set(entity.id, entity);
    this.eventEmitter.emit("entity.spawn", {
      id: entity.id,
      entity: entity.type,
      x: entity.x,
      y: entity.y
    });
    this.logger.debug(`Spawned entity ${entity.type} (${entity.id})`);
  }

  /**
   * Instantly move an entity to a new position
   *
   * The entity must already exist in the game.
   * @param id The UUID of the entity
   * @param x The new x-coordinate
   * @param y The new y-coordinate
   */
  public moveEntity(id: string, x: number, y: number): void {
    if (!this.entities.has(id)) return;
    const entity = this.entities.get(id);
    entity.moveTo(x, y);
    this.eventEmitter.emit("entity.move", { id, x, y, speed: 0 });
    this.logger.debug(`Moved ${entity.type} to (${x}, ${y}) (${id})`);
  }

  /**
   * Update the player's state
   * @param id The UUID of the player
   * @param facing The direction the player is facing
   * @param isRunning Whether the player is running
   * @param isAttacking Whether the player is attacking
   */
  public updatePlayer(
    id: string,
    facing: "up" | "down" | "left" | "right",
    isRunning: boolean,
    isAttacking: boolean
  ): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    player.facing = facing;
    player.isRunning = isRunning;
    player.isAttacking = isAttacking;
    this.eventEmitter.emit("player.update", { id, facing, isRunning, isAttacking });
    this.logger.debug(
      `Updated player ${player.name} {facing: ${facing}, isRunning: ${isRunning}, isAttacking: ${isAttacking}} (${id})`
    );
  }

  /**
   * Attack a target
   *
   * The attacker must be a player and the target must be a mob
   * @param id The UUID of the attacker
   * @param targetId The UUID of the target
   */
  public attack(id: string, targetId: string): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    const target = this.entities.get(targetId);
    if (target && target instanceof Mob) target.damage(1);
    // TODO: Add playerAttack event
    this.logger.debug(
      `Player ${player.name} attacked ${target.type} (${player.id} -> ${targetId})`
    );
  }

  /**
   * Find the closest entity to a point of a given type
   * 
   * @param x The x-coordinate to search from
   * @param y The y-coordinate to search from
   * @param type The type of entity to search for
   * @returns The closest entity of the given type, or null if none are found
   */
  public getClosestEntity(x: number, y: number, type: EntityType): Entity | null {
    return Array.from(this.entities.values()).sort((a, b) => {
      return (
        Math.sqrt((a.x - x) ** 2 + (a.y - y) ** 2) - Math.sqrt((b.x - x) ** 2 + (b.y - y) ** 2)
      ); // TODO: some helper function for distance
    }).find((entity) => entity.type === type) ?? null;
  }

  /**
   * Broadcast data to all clients
   * @param event The event name to broadcast
   * @param data The data to broadcast
   */
  public broadcast(event: string, data: any): void {
    this.clients.forEach((client) => {
      this.sendTo(client, event, data);
    });
  }

  /**
   * Send data to a specific client
   * @param client The client to send the data to
   * @param event The event name to send
   * @param data The data to send
   */
  public sendTo(client: Client, event: string, data: any): void {
    client.socket.send(JSON.stringify({ event, data }));
  }

  @Interval(ServerService.MS_PER_TICK)
  private processTick(): void {
    this.tick++;
    this.entities.forEach((entity) => {
      entity.tick(this.tick, this, this.eventEmitter);
    });
    this.processDeaths();
  }

  @Interval(ServerService.MS_PER_HEARTBEAT)
  private checkHeartbeats(): void {
    const now = Date.now();
    this.clients.forEach((client) => {
      if (now - client.lastHeartbeat > ServerService.MS_HEARTBEAT_TIMEOUT) {
        this.removeClient(client.id);
      }
    });
  }

  @Interval(ServerService.MS_PER_HEARTBEAT)
  private heartbeat(): void {
    this.clients.forEach((client) => {
      this.sendTo(client, "heartbeat", { id: client.id });
    });
  }

  private updateClient(client: Client): void {
    this.entities.forEach((entity) => {
      if (entity.id === client.id) return;
      if (entity.hidden) return;
      if (entity instanceof Mob && entity.isDead) return;
      this.sendTo(client, "entity-spawn", {
        id: entity.id,
        entity: entity.type,
        x: entity.x,
        y: entity.y
      });
    });
  }

  private processDeaths(): void {
    this.entities.forEach((entity) => {
      if (entity instanceof Mob && entity.isDead) {
        this.entities.delete(entity.id);
        this.eventEmitter.emit("entity.despawn", { id: entity.id });
      }
    });
  }
}

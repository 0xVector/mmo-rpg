import { forwardRef, Inject, Injectable, LoggerService } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { Entity, EntityType } from "implementation/entities/entity";
import { Mob } from "implementation/entities/mobs/mob";
import { Player } from "implementation/entities/player";
import { Spawner } from "implementation/entities/spawner";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { ServerService } from "server/server.service";
import { LiveEntity } from "implementation/entities/live-entity";

/**
 * The world service
 *
 * The world service manages the world state. It is responsible for
 * managing and updating entities, and implements the world tick loop.
 */
@Injectable()
export class WorldService {
  static readonly MS_PER_TICK = 200;

  private entities: Map<string, Entity>;
  private tick: number;

  /** The number of existing entities */
  get entityCount(): number {
    return this.entities.size;
  }

  constructor(
    @Inject(forwardRef(() => ServerService)) private serverService: ServerService,
    private eventEmitter: EventEmitter2,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private logger: LoggerService
  ) {
    this.entities = new Map();
    this.tick = 0;

    const spawner = new Spawner(0, 0);
    this.entities.set(spawner.id, spawner);
  }

  public getEntities(): Entity[] {
    return Array.from(this.entities.values());
  }

  /**
   * Spawn a player in the game
   *
   * The client must be registered with the server before calling this method
   * @param id The UUID of the client
   */
  public spawnPlayer(id: string): void {
    if (!this.serverService.isClient(id)) return;

    const client = this.serverService.getClient(id);
    const player = new Player(id, client.playerName, 0, 0);
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
   * Despawn an entity from the game
   *
   * @param id The UUID of the entity
   */
  public despawnEntity(id: string): void {
    if (!this.entities.has(id)) return;
    this.entities.delete(id);
    this.eventEmitter.emit("entity.despawn", { id });
    this.logger.debug(`Despawned entity (${id})`);
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
    if (!this.serverService.isClient(id)) return;
    const player = this.entities.get(id);
    if (!(player instanceof Player)) return;

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
   * @param fromId The UUID of the attacker
   * @param toId The UUID of the target
   */
  public attack(fromId: string, toId: string): void {
    const from = this.entities.get(fromId);
    const to = this.entities.get(toId);
    if (from && to && to instanceof LiveEntity) to.damage(1);
    this.logger.debug(
      `${from.type} ${from instanceof Player ? from.name : ""} attacked ${
        to.type
      } (${fromId} -> ${toId})`
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
    return (
      Array.from(this.entities.values())
        .sort((a, b) => {
          return (
            Math.sqrt((a.x - x) ** 2 + (a.y - y) ** 2) - Math.sqrt((b.x - x) ** 2 + (b.y - y) ** 2)
          ); // TODO: some helper function for distance
        })
        .find((entity) => entity.type === type) ?? null
    );
  }

  @Interval(WorldService.MS_PER_TICK)
  private processTick(): void {
    this.tick++;
    this.entities.forEach((entity) => {
      entity.tick(this.tick, this, this.eventEmitter);
    });
    this.processDeaths();
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

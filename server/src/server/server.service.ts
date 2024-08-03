import { forwardRef, Inject, Injectable, LoggerService } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
import { Client } from "../implementation/client";
import { Mob } from "../implementation/entities/mobs/mob";
import { WorldService } from "world/world.service";

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
  static readonly MS_PER_HEARTBEAT = 1000;
  static readonly MS_HEARTBEAT_TIMEOUT = 3000;

  private clients: Map<string, Client>;

  constructor(
    @Inject(forwardRef(() => WorldService)) private worldService: WorldService,
    private eventEmitter: EventEmitter2,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private logger: LoggerService
  ) {
    this.clients = new Map();
  }

  /**
   * Check if an id belongs to a connected client
   * 
   * @returns Whether the id belongs to a connected client
   */
  public isClient(id: string): boolean {
    return this.clients.has(id);
  }

  /**
   * Get a client by their id
   * 
   * @param id Id of the client
   * @returns The client with the given id
   */
  public getClient(id: string): Client {
    return this.clients.get(id);
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
    const client = new Client(clientSocket, playerName);
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
    const name = this.clients.get(id).playerName;
    this.clients.delete(id);
    this.worldService.despawnEntity(id);
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
    this.worldService.getEntities().forEach((entity) => {
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
}

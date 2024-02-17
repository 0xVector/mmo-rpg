import { Injectable } from "@nestjs/common";
import { PlayerUpdateDto } from "./core.gateway.dto";
import { ServerService } from "server/server.service";

/** The core service */
@Injectable()
export class CoreService {
  constructor(private server: ServerService) {}

  /**
   * Join a client and register them with the server
   * @param clientSocket The client's WebSocket connection instance
   * @param playerName The name of the player
   * @returns The UUID of the newly registered client
   */
  public joinClient(clientSocket: WebSocket, playerName: string): string {
    return this.server.registerClient(clientSocket, playerName);
  }

  /**
   * Leave a client and remove them from the server
   * @param id The UUID of the client
   */
  public leaveClient(id: string): void {
    this.server.removeClient(id);
  }

  /**
   * Spawn a player in the game
   *
   * The client must be registered with the server before calling this method
   * @param id The UUID of the client
   */
  public spawnPlayer(id: string): void {
    this.server.spawnPlayer(id);
  }

  /**
   * Process a heartbeat from a client
   * @param id The UUID of the client
   */
  public receiveHeartbeat(id: string): void {
    this.server.receiveHeartbeat(id);
  }

  /**
   * Process a move from a client
   * @param id The UUID of the client
   * @param x The new x-coordinate
   * @param y The new y-coordinate
   */
  public movePlayer(id: string, x: number, y: number): void {
    this.server.moveEntity(id, x, y);
  }

  /**
   * Update a player's state
   * @param data The new state of the player
   */
  public updatePlayer(data: PlayerUpdateDto): void {
    this.server.updatePlayer(data.id, data.facing, data.isRunning, data.isAttacking);
  }

  /**
   * Process an attack on a player
   * @param id The UUID of the attacker
   * @param target The UUID of the target
   */
  public attack(id: string, target: string): void {
    this.server.attack(id, target);
  }
}

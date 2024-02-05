import { Injectable } from "@nestjs/common";
import { PlayerMoveDto } from "./core.gateway.dto";
import { ServerService } from "server/server.service";

@Injectable()
export class CoreService {
  private server: ServerService;

  constructor(server: ServerService) {
    this.server = server;
  }

  public joinClient(clientSocket: WebSocket, playerName: string): string {
    return this.server.registerClient(clientSocket, playerName);
  }

  public leaveClient(id: string): void {
    this.server.removeClient(id);
  }

  public spawnPlayer(id: string): void {
    this.server.spawnPlayer(id);
  }

  public receiveHeartbeat(id: string): void {
    this.server.receiveHeartbeat(id);
  }

  public movePlayer(data: PlayerMoveDto): void {
    this.server.movePlayer(data.id, data.x, data.y);
  }
}

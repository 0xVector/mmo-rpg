import { Injectable } from "@nestjs/common";
import { PlayerUpdateDto } from "./core.gateway.dto";
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

  public movePlayer(id: string, x: number, y: number): void {
    this.server.moveEntity(id, x, y);
  }

  public updatePlayer(data: PlayerUpdateDto): void {
    this.server.updatePlayer(data.id, data.facing, data.isRunning);
  }

  public attack(id: string, target: string): void {
    this.server.attack(id, target);
  }
}

import { Injectable } from "@nestjs/common";
import { Client } from "./implementation/client";
import { Interval } from "@nestjs/schedule";
import { WebSocketServer as WSServer } from "ws";
import { WebSocketServer } from "@nestjs/websockets";
import { Player } from "./implementation/player";

@Injectable()
export class CoreService {
  @WebSocketServer()
  private server: WSServer;

  private clients: Map<string, Client>;

  constructor() {
    this.clients = new Map();
  }

  public registerClient(clientSocket: WebSocket, playerName: string): string {
    const client = new Client(clientSocket);
    client.player = new Player(client.id, playerName);

    this.clients.set(client.id, client);
    return client.id;
  }

  public receiveHeartbeat(id: string): void {
    if (!this.clients.has(id)) return;
    this.clients.get(id).heartbeat();
  }

  public kickClient(id: string): void {
    this.clients.delete(id);
    console.log(`Kicked client ${id}: timeout`);
  }

  @Interval(1000)
  private checkHeartbeats(): void {
    const now = Date.now();
    this.clients.forEach((client) => {
      if (now - client.lastHeartbeat > 10000) {
        this.kickClient(client.id);
      }
    });
  }

  @Interval(1000)
  private heartbeat(): void {
    this.broadcast("heartbeat", {});
  }

  private broadcast(event: string, data: any): void {
    this.clients.forEach((client) => {
      this.sendTo(client, event, data);
    });
  }

  private sendTo(client: Client, event: string, data: any): void {
    client.socket.send(JSON.stringify({ event, data }));
  }
}

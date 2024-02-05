import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { Client } from "implementation/client";
import { Player } from "implementation/player";

@Injectable()
export class ServerService {
  private eventEmitter: EventEmitter2;
  private clients: Map<string, Client>;

  constructor(eventEmitter: EventEmitter2) {
    this.eventEmitter = eventEmitter;
    this.clients = new Map();
  }

  public registerClient(clientSocket: WebSocket, playerName: string): string {
    const client = new Client(clientSocket);
    const player = new Player(client.id, playerName);
    client.player = player;

    this.clients.set(client.id, client);
    this.updateClient(client);
    console.log(`Client ${client.id}, ${client.player.name} joined`);
    return client.id;
  }

  public removeClient(id: string): void {
    this.clients.delete(id);
    this.eventEmitter.emit("player.despawn", { id });
    console.log(`Client ${id} left`);
  }

  public receiveHeartbeat(id: string): void {
    if (!this.clients.has(id)) return;
    this.clients.get(id).heartbeat();
  }

  public spawnPlayer(id: string): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    this.eventEmitter.emit("player.spawn", { id, x: player.x, y: player.y });
  }

  public movePlayer(id: string, x: number, y: number): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    player.move(x, y);
    this.eventEmitter.emit("player.move", { id, x, y });
  }

  public broadcast(event: string, data: any): void {
    this.clients.forEach((client) => {
      this.sendTo(client, event, data);
    });
  }

  public sendTo(client: Client, event: string, data: any): void {
    client.socket.send(JSON.stringify({ event, data }));
  }

  @Interval(1000)
  private checkHeartbeats(): void {
    const now = Date.now();
    this.clients.forEach((client) => {
      if (now - client.lastHeartbeat > 3000) {
        this.removeClient(client.id);
      }
    });
  }

  @Interval(1000)
  private heartbeat(): void {
    this.clients.forEach((client) => {
      this.sendTo(client, "heartbeat", { id: client.id });
    });
  }

  private updateClient(client: Client): void {
    this.clients.forEach((otherClient) => {
      if (otherClient.id !== client.id) {
        const player = otherClient.player;
        this.sendTo(client, "player-spawn", { id: player.id, x: player.x, y: player.y });
      }
    });
  }
}

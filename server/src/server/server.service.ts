import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { Client } from "implementation/client";
import { Entity, EntityType } from "implementation/entities/entity";
import { Player } from "implementation/entities/player";

@Injectable()
export class ServerService {
  private eventEmitter: EventEmitter2;
  private clients: Map<string, Client>;
  private entities: Map<string, Entity>;

  constructor(eventEmitter: EventEmitter2) {
    this.eventEmitter = eventEmitter;
    this.clients = new Map();
    this.entities = new Map();
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
    this.eventEmitter.emit("entity.despawn", { id });
    console.log(`Client ${id} left`);
  }

  public receiveHeartbeat(id: string): void {
    if (!this.clients.has(id)) return;
    this.clients.get(id).heartbeat();
  }

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
  }

  public moveEntity(id: string, x: number, y: number): void {
    if (!this.entities.has(id)) return;
    const entity = this.entities.get(id);
    entity.move(x, y);
    this.eventEmitter.emit("entity.move", { id, x, y });
  }

  public updatePlayer(
    id: string,
    facing: "up" | "down" | "left" | "right",
    isRunning: boolean
  ): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    player.facing = facing;
    player.isRunning = isRunning;
    this.eventEmitter.emit("player.update", { id, facing, isRunning });
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
    this.entities.forEach((entity) => {
      if (entity.id === client.id) return;
      this.sendTo(client, "entity-spawn", {
        id: entity.id,
        entity: entity.entityType,
        x: entity.x,
        y: entity.y
      });
    });
  }
}

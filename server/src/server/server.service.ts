import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Interval } from "@nestjs/schedule";
import { Client } from "implementation/client";
import { Entity, EntityType } from "implementation/entities/entity";
import { createEntity } from "implementation/entities/entity-factory";
import { Mob } from "implementation/entities/mob";
import { Player } from "implementation/entities/player";
import { Spawner } from "implementation/entities/spawner";

@Injectable()
export class ServerService {
  static readonly MS_PER_TICK = 200;
  static readonly MS_PER_HEARTBEAT = 1000;
  static readonly MS_HEARTBEAT_TIMEOUT = 3000;

  private eventEmitter: EventEmitter2;
  private clients: Map<string, Client>;
  private entities: Map<string, Entity>;
  private tick: number;

  constructor(eventEmitter: EventEmitter2) {
    this.eventEmitter = eventEmitter;
    this.clients = new Map();
    this.entities = new Map();
    this.tick = 0;

    const spawner = new Spawner(0, 0);
    this.entities.set(spawner.id, spawner);
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
    this.entities.delete(id);
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

  public spawnEntity(entityType: EntityType, x: number, y: number): void {
    const entity = createEntity(entityType, x, y);
    this.entities.set(entity.id, entity);
    this.eventEmitter.emit("entity.spawn", {
      id: entity.id,
      entity: entity.entityType,
      x: entity.x,
      y: entity.y
    });
  }

  public moveEntity(id: string, x: number, y: number): void {
    if (!this.entities.has(id)) return;
    const entity = this.entities.get(id);
    entity.moveTo(x, y);
    this.eventEmitter.emit("entity.move", { id, x, y, speed: 0 });
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

  public attack(id: string, targetId: string): void {
    if (!this.clients.has(id)) return;
    const player = this.clients.get(id).player;
    const target = this.entities.get(targetId);
    if (target && target instanceof Mob) target.damage(1);
  }

  public broadcast(event: string, data: any): void {
    this.clients.forEach((client) => {
      this.sendTo(client, event, data);
    });
  }

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
        entity: entity.entityType,
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

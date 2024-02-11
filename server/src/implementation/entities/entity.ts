import { EventEmitter2 } from "@nestjs/event-emitter";
import { Tickable } from "implementation/tickable";
import { EntityMoveEvent } from "server/server.event";
import { ServerService } from "server/server.service";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime",
  SPAWNER = "spawner"
}

export abstract class Entity implements Tickable {
  public id: string;
  public entityType: EntityType;
  public x: number;
  public y: number;
  public hidden: boolean;

  constructor(id: string, entityType: EntityType, x: number, y: number) {
    this.id = id;
    this.entityType = entityType;
    this.x = x;
    this.y = y;
    this.hidden = true;
  }

  public tick(tick: number, server: ServerService, emitter: EventEmitter2): void {}  // Do nothing by default

  public moveTo(x: number, y: number): EntityMoveEvent {
    this.x = x;
    this.y = y;
    return { id: this.id, x, y, speed: 0 };
  }
}

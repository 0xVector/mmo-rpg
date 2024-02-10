import { Actor, ActorArgs, CollisionGroup, CollisionGroupManager } from "excalibur";
import { Spawnable } from "./interfaces/spawnable";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime"
}

export abstract class CustomEntity extends Actor implements Spawnable {
  private static colisionGroup = CollisionGroupManager.create("entities");

  public netId: string;
  public spawned: boolean = false;

  constructor(id: string, config: ActorArgs = {}) {
    config.collisionGroup = CustomEntity.colisionGroup;
    super(config);
    this.netId = id;
  }

  public move(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
  }

  public moveGradually(x: number, y: number, speed: number): void {
    this.actions.moveTo(x, y, speed);
  }

  public despawn(): void {
    this.kill();
  }

  public spawn(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
    this.spawned = true;
  }
}

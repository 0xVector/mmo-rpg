import { Actor, ActorArgs, CollisionGroupManager, vec } from "excalibur";
import { Spawnable } from "./interfaces/spawnable";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime",
  ATTACK = "attack"
}

export abstract class CustomEntity extends Actor implements Spawnable {
  private static entityCollisionGroup = CollisionGroupManager.create("entities");

  public netId: string;
  public spawned: boolean = false;

  constructor(id: string, config: ActorArgs = {}) {
    if (!config.collisionGroup) config.collisionGroup = CustomEntity.entityCollisionGroup;
    super(config);
    this.netId = id;
  }

  public move(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
  }

  public moveOverTime(x: number, y: number, time: number): void {
    if (time === 0) {
      this.move(x, y);
      return;
    }
    
    const speed = this.pos.distance(vec(x, y)) / time;
    this.actions.clearActions();
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

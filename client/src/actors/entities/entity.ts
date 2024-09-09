import { Actor, ActorArgs, CollisionGroupManager, Engine, vec } from "excalibur";
import { Spawnable } from "./interfaces/spawnable";

export enum EntityType {
  PLAYER = "player",
  SLIME = "slime",
  SLIME_PURPLE = "slimePurple",
  ATTACK = "attack"
}

export abstract class CustomEntity extends Actor implements Spawnable {
  public static MAX_HP = 1;
  private static entityCollisionGroup = CollisionGroupManager.create("entities");

  public netId: string;
  public spawned: boolean = false;
  public dir: Direction;
  public isMoving: boolean;
  public isDashing: boolean;
  public hp: number = CustomEntity.MAX_HP;

  constructor(id: string, config: ActorArgs = {}) {
    if (!config.collisionGroup) config.collisionGroup = CustomEntity.entityCollisionGroup;
    super(config);
    this.netId = id;
    this.dir = "down";
    this.isMoving = false;
    this.isDashing = false;
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

  public attack(): void {}  // TODO: Implement attack method or make abstract

  public damage(damage: number) {
    this.hp -= damage;
    this.actions.blink(50, 50, 3);
    if (this.hp <= 0) this.despawn();
  }
}

export type Direction = "up" | "down" | "left" | "right";
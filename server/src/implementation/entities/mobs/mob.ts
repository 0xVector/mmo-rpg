import { v4 as uuid } from "uuid";
import { Entity, EntityType } from "../entity";
import { EntityMoveEvent } from "server/server.event";

export abstract class Mob extends Entity {
  public hp: number;
  public speed: number;

  get isDead(): boolean {
    return this.hp <= 0;
  }

  constructor(entityType: EntityType, x: number, y: number, hp: number) {
    super(uuid(), entityType, x, y);
    this.hp = hp;
    this.speed = 0;
  }
  
  public override moveTo(x: number, y: number): EntityMoveEvent {
    this.x = x;
    this.y = y;
    return { id: this.id, x, y, speed: this.speed };
  }

  public damage(amount: number): void {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.kill();
    }
  }

  public kill(): void {
    this.hp = 0;
  }
}

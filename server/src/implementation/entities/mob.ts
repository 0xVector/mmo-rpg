import { v4 as uuid } from "uuid";
import { Entity, EntityType } from "./entity";

export abstract class Mob extends Entity {
  public hp: number;

  constructor(entityType: EntityType, x: number, y: number, hp: number) {
    super(uuid(), entityType, x, y);
    this.hp = hp;
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

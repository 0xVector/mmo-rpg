import { v4 as uuid } from "uuid";
import { Entity, EntityType } from "../entity";
import { EntityMoveEvent } from "server/server.event";

/** Represents an abstract mob in the game */
export abstract class Mob extends Entity {
  public hp: number;
  public speed: number;

  get isDead(): boolean {
    return this.hp <= 0;
  }

  /**
   * Create a new mob
   *
   * @param entityType The type of mob
   * @param x The x-coordinate of the mob
   * @param y The y-coordinate of the mob
   * @param hp The health of the mob
   */
  constructor(entityType: EntityType, x: number, y: number, hp: number) {
    super(uuid(), entityType, x, y);
    this.hp = hp;
    this.speed = 0;
  }

  /**
   * Move the mob to a new position
   *
   * This overrides the default moveTo method in Entity and uses the mob's speed
   * @param x
   * @param y
   * @returns
   */
  public override moveTo(x: number, y: number): EntityMoveEvent {
    this.x = x;
    this.y = y;
    return { id: this.id, x, y, speed: this.speed };
  }

  /**
   * Damage the mob
   * 
   * Can potentially kill the mob
   * @param amount The amount of damage to deal
   */
  public damage(amount: number): void {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.kill();
    }
  }

  /**
   * Kill the mob
   */
  public kill(): void {
    this.hp = 0;
  }
}

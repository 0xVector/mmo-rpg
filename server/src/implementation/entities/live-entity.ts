import { Entity, EntityType } from "./entity";

/** Represents an entity that is alive - has health and can die
 */
export abstract class LiveEntity extends Entity {
  public hp: number;

  get isDead(): boolean {
    return this.hp <= 0;
  }

  set isDead(dead: boolean) {
    if (dead) this.hp = 0;
    else this.hp = 1;
  }

  /**
   * Create a new live entity
   *
   * @param type The type of entity
   * @param id The unique identifier of the entity
   * @param x The x-coordinate of the entity
   * @param y The y-coordinate of the entity
   * @param hp The intial hp of the entity
   */
  constructor(type: EntityType, id: string, x: number, y: number, hp: number) {
    super(type, id, x, y);
    this.hp = hp;
  }

  /**
   * Damage the entity
   *
   * Can potentially kill the entity
   * @param amount The amount of damage to deal
   */
  public damage(amount: number): void {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.kill();
    }
  }

  /**
   * Kill the entity
   */
  public kill(): void {
    this.isDead = true;
  }
}

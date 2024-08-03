import { v4 as uuid } from "uuid";
import { EntityType } from "../entity";
import { EntityMoveEvent } from "server/server.event";
import { LiveEntity } from "../live-entity";

/** Represents an abstract mob in the game
 * 
 * Mob is any entity that has the properties of a creature - can be damaged, die
 * and move on its own.
 */
export abstract class Mob extends LiveEntity {
  public speed: number;

  /**
   * Create a new mob
   *
   * @param type The type of mob
   * @param x The x-coordinate of the mob
   * @param y The y-coordinate of the mob
   * @param hp The health of the mob
   */
  constructor(type: EntityType, x: number, y: number, hp: number) {
    super(type, uuid(), x, y, hp);
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
}

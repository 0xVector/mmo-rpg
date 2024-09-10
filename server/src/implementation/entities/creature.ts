import { EventEmitter2 } from "@nestjs/event-emitter";
import { WorldService } from "world/world.service";
import { LiveEntity } from "./live-entity";

/** Represent an abstract creature in the game
 *
 * Creature is a LiveEntity that has direction and other state properties.
 *
 * @param direction The direction the creature is facing in
 * @param isMoving Whether the creature is moving
 */
export abstract class Creature extends LiveEntity {
  /** The direction the Creature is facing in */
  public dir: Direction = "down";
  /** Whether the Creature is moving */
  public isMoving: boolean = false;
  /** Whether the Creature is dashing */
  public isDashing: boolean = false;
  /** The score of the Creature */
  public score: number = 0;

  /**
   * Override the default Entity tick to emit updates
   */
  public override tick(tick: number, world: WorldService, emitter: EventEmitter2): void {
    emitter.emit("entity.update", {
      id: this.id,
      dir: this.dir,
      isMoving: this.isMoving,
      isDashing: this.isDashing,
      hp: this.hp,
      score: this.score
    });
  }
}

export type Direction = "up" | "down" | "left" | "right";

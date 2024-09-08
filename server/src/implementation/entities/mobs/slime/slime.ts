import { EntityType } from "../../entity";
import { AbstractSlime } from "./abstract-slime";

/** Slime mob
 *
 * Slime is a basic mob that follows the player.
 * Its speed is randomised between set bounds.
 */
export class Slime extends AbstractSlime {
  static override readonly MAX_HP = 2;
  static override readonly MAX_SPEED = 2;

  constructor(x: number, y: number) {
    const speed = Math.max(Math.random(), 0.3) * Slime.MAX_SPEED;
    super(EntityType.SLIME, x, y, Slime.MAX_HP, speed);
  }
}

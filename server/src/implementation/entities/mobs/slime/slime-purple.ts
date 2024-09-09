import { EntityType } from "../../entity";
import { AbstractSlime } from "./abstract-slime";

/** Purple Slime mob
 *
 * Purple Slime is a basic mob that follows the player.
 * It is a faster and stronger variant of the Slime.
 * Its speed is not randomised.
 */
export class SlimePurple extends AbstractSlime {
  static override readonly MAX_HP = 4;
  static override readonly MAX_SPEED = 4;
  
  override readonly DAMAGE = 2;
  override readonly ATTACK_DISTANCE = 0.5;
  override readonly ATTACK_COOLDOWN = 1;
  override readonly ATTACK_HIT_DELAY = 0.4;

  constructor(x: number, y: number) {
    super(EntityType.SLIME_PURPLE, x, y, SlimePurple.MAX_HP, SlimePurple.MAX_SPEED);
  }
}

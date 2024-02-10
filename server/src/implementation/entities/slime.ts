import { Interval } from "@nestjs/schedule";
import { Mob } from "./mob";
import { EntityType } from "./entity";

export class Slime extends Mob {
  static readonly MAX_HP = 10;
  static readonly MAX_MOVEMENT = 10;
  static readonly JUMP_INTERVAL = 3000;

  constructor(x: number, y: number) {
    super(EntityType.SLIME, x, y, Slime.MAX_HP);
  }

  @Interval(Slime.JUMP_INTERVAL)
  public movement() {
    const x = Math.floor(Math.random() * Slime.MAX_MOVEMENT);
    const y = Math.floor(Math.random() * Slime.MAX_MOVEMENT);
    this.moveBy(x, y);
    console.log(`Slime ${this.id} moved to ${this.x}, ${this.y}`);
  }
}

import { CollisionType, Engine, Shape, vec } from "excalibur";
import { PLAYER_SIZE, animations } from "./player-sprites";
import { CustomEntity } from "../entity";

export class Player extends CustomEntity {
  static readonly MS_PER_ATTACK = 100*4;

  public isRunning: boolean;
  public facing: "down" | "up" | "right" | "left";
  private msSinceLastAttack: number;

  get isAttacking() {
    return this.msSinceLastAttack < Player.MS_PER_ATTACK;
  }

  constructor(netId: string) {
    super(netId, {
      width: 15 * PLAYER_SIZE,
      height: 23 * PLAYER_SIZE,
      collisionType: CollisionType.Active,
      collider: Shape.Box(10 * PLAYER_SIZE, 3 * PLAYER_SIZE, vec(0.5, 0.5), vec(0, 8 * PLAYER_SIZE))
    });
    this.isRunning = false;
    this.facing = "down";
    this.msSinceLastAttack = Player.MS_PER_ATTACK;
  }

  public onInitialize(engine: Engine) {
    this.graphics.add("idle-down", animations.idleDownAnim);
    this.graphics.add("idle-up", animations.idleUpAnim);
    this.graphics.add("idle-right", animations.idleRightAnim);
    this.graphics.add("idle-left", animations.idleLeftAnim);
    this.graphics.add("run-down", animations.runDownAnim);
    this.graphics.add("run-up", animations.runUpAnim);
    this.graphics.add("run-right", animations.runRightAnim);
    this.graphics.add("run-left", animations.runLeftAnim);
    this.graphics.add("attack-down", animations.attackDownAnim);
    this.graphics.add("attack-up", animations.attackUpAnim);
    this.graphics.add("attack-right", animations.attackRightAnim);
    this.graphics.add("attack-left", animations.attackLeftAnim);
    this.graphics.add("death", animations.deathAnim);

    this.graphics.use("idle-down");
    this.z = 100;
  }

  public onPreUpdate(engine: Engine, _delta: number): void {}

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta);
    if (this.isAttacking) this.graphics.use(`attack-${this.facing}`);
    else if (this.isRunning) this.graphics.use(`run-${this.facing}`);
    else this.graphics.use(`idle-${this.facing}`);
  }

  public onPostUpdate(engine: Engine<any>, delta: number): void {
    super.onPostUpdate(engine, delta);
    this.msSinceLastAttack += delta;
  }

  // Play attack animation (no damage)
  public attack() {
    if (this.isAttacking) return;
    this.msSinceLastAttack = 0;
  }
}

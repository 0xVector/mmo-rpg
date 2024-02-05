import { Actor, CollisionType, Engine, Shape, vec } from "excalibur";
import { WSManager } from "../../websockets";
import { PLAYER_SIZE, animations, spriteSheet } from "./player-sprites";

export class Player extends Actor {
  public uuid: string;
  public facing: "up" | "down" | "left" | "right";
  public isRunning: boolean;
  protected wsManager: WSManager;

  constructor(uuid: string, x: number, y: number, wsManager: WSManager) {
    super({
      x: x,
      y: y,
      width: 15 * PLAYER_SIZE,
      height: 23 * PLAYER_SIZE,
      collisionType: CollisionType.Active,
      collider: Shape.Box(10 * PLAYER_SIZE, 3 * PLAYER_SIZE, vec(0.5, 0.5), vec(0, 8 * PLAYER_SIZE))
    });
    this.uuid = uuid;
    this.facing = "down";
    this.isRunning = false;
    this.wsManager = wsManager;
  }

  public onInitialize(engine: Engine) {
    for (let sprite of spriteSheet.sprites) {
      sprite.destSize = { height: 23 * PLAYER_SIZE, width: 15 * PLAYER_SIZE };
    }

    this.graphics.add("idle-down", animations.idleDownAnim);
    this.graphics.add("idle-up", animations.idleUpAnim);
    this.graphics.add("idle-right", animations.idleRightAnim);
    this.graphics.add("idle-left", animations.idleLeftAnim);
    this.graphics.add("run-down", animations.runDownAnim);
    this.graphics.add("run-up", animations.runUpAnim);
    this.graphics.add("run-right", animations.runRightAnim);
    this.graphics.add("run-left", animations.runLeftAnim);

    this.graphics.use("idle-down");
    this.z = 100;

    console.log("Player spawned");
  }

  public onPreUpdate(engine: Engine, _delta: number): void {}

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta);
    if (this.isRunning) this.graphics.use(`run-${this.facing}`);
    else this.graphics.use(`idle-${this.facing}`);
  }

  public move(x: number, y: number): void {
    this.pos.x = x;
    this.pos.y = y;
  }

  public despawn(): void {
    this.kill();
  }
}

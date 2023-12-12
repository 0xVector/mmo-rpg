import {
  Actor,
  Animation,
  AnimationStrategy,
  CollisionType,
  Color,
  Direction,
  Engine,
  Keys,
  Shape,
  Sprite,
  SpriteSheet,
  Vector,
  range,
  vec,
} from "excalibur";
import { images } from "../resources";
import { WSManager } from "../websockets";

const PLAYER_SIZE = 5;
const PLAYER_ANIMATION_SPEED = 200;

const sprite = new Sprite({
  image: images.playerImage,
  sourceView: {
    x: 18,
    y: 22,
    width: 13,
    height: 21,
  },
  destSize: {
    width: 18 * PLAYER_SIZE,
    height: 22 * PLAYER_SIZE,
  },
});

export class Player extends Actor {
  public facing: "up" | "down" | "left" | "right";
  public isRunning: boolean;
  private wsManager: WSManager;

  constructor(x: number, y: number, wsManager: WSManager) {
    super({
      x: x,
      y: y,
      width: 15*PLAYER_SIZE,
      height: 23*PLAYER_SIZE,
      collisionType: CollisionType.Active,
      collider: Shape.Box(10*PLAYER_SIZE, 3*PLAYER_SIZE, vec(.5, .5), vec(0, 8*PLAYER_SIZE)),
    });
    this.facing = "down";
    this.isRunning = false;
    this.wsManager = wsManager;
  }

  public onInitialize(engine: Engine) {
    const spriteSheet = SpriteSheet.fromImageSource({
      image: images.playerImage,
      grid: {
        rows: 6,
        columns: 6,
        spriteWidth: 15,
        spriteHeight: 23, // 21
      },
      spacing: {
        originOffset: { x: 17, y: 20 }, // y: 22
        margin: { x: 33, y: 25 },
      },
    });
    for (let sprite of spriteSheet.sprites) {
      sprite.destSize = {height: 23*PLAYER_SIZE, width: 15*PLAYER_SIZE};
    }

    // Animations
    const idleDownAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(0, 5),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop,
    );
    const idleUpAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(12, 17),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    const idleRightAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(6, 11),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    const idleLeftAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(6, 11),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    idleLeftAnim.flipHorizontal = true;
    const runDownAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(18, 23),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    const runUpAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(30, 35),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    const runRightAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(24, 29),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    const runLeftAnim = Animation.fromSpriteSheet(
      spriteSheet,
      range(24, 29),
      PLAYER_ANIMATION_SPEED,
      AnimationStrategy.Loop
    );
    runLeftAnim.flipHorizontal = true;

    this.graphics.add("idle-down", idleDownAnim);
    this.graphics.add("idle-up", idleUpAnim);
    this.graphics.add("idle-right", idleRightAnim);
    this.graphics.add("idle-left", idleLeftAnim);
    this.graphics.add("run-down", runDownAnim);
    this.graphics.add("run-up", runUpAnim);
    this.graphics.add("run-right", runRightAnim);
    this.graphics.add("run-left", runLeftAnim);

    this.graphics.use("idle-down");
    this.z = 100;

    console.log("Player spawned");
  }

  public onPreUpdate(engine: Engine, _delta: number): void {
    const MAX_SPEED = 400;
    const key = engine.input.keyboard;

    let targetVel = Vector.Zero;
    if (
      key.isHeld(Keys.A) ||
      key.isHeld(Keys.D) ||
      key.isHeld(Keys.W) ||
      key.isHeld(Keys.S)
    ) {
      this.isRunning = true;
      if (key.isHeld(Keys.W)) {
        this.facing = "up";
        targetVel = targetVel.add(Vector.Up);
      }
      if (key.isHeld(Keys.S)) {
        this.facing = "down";
        targetVel = targetVel.add(Vector.Down);
      }
      if (key.isHeld(Keys.A)) {
        this.facing = "left";
        targetVel = targetVel.add(Vector.Left);
      }
      if (key.isHeld(Keys.D)) {
        this.facing = "right";
        targetVel = targetVel.add(Vector.Right);
      }
    } else {
      this.isRunning = false;
    }

    targetVel.size = targetVel.size > 0 ? MAX_SPEED : 0;
    this.vel = targetVel;

    // console.log(this.vel, targetVel);
  }

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta);
    if (this.isRunning) this.graphics.use(`run-${this.facing}`);
    else this.graphics.use(`idle-${this.facing}`);

    this.wsManager.send("playerUpdate", {x: this.pos.x, y: this.pos.y});
  }

  private easeOutQuint(x: number): number {
    return 1 - (1 - x) ** 5;
  }
}

import { Engine, Keys, Vector } from "excalibur";
import { WSManager } from "../../../websockets";
import { Player } from "./player";

export class PlayerOwn extends Player {
  private lastXY: { x: number; y: number };
  private lastState: { facing: "up" | "down" | "left" | "right"; isRunning: boolean };
  private wsManager: WSManager;

  constructor(id: string, wsManager: WSManager) {
    super(id);
    this.lastState = { facing: "down", isRunning: false };
    this.wsManager = wsManager;
  }

  public onInitialize(engine: Engine) {
    super.onInitialize(engine);
  }

  public override spawn(x: number, y: number): void {
    super.spawn(x, y);
    this.lastXY = { x, y };
    console.log("PlayerOwn spawned ", this.id);
  }

  public onPreUpdate(engine: Engine, _delta: number): void {
    const MAX_SPEED = 400;
    const key = engine.input.keyboard;

    let targetVel = Vector.Zero;
    if (key.isHeld(Keys.A) || key.isHeld(Keys.D) || key.isHeld(Keys.W) || key.isHeld(Keys.S)) {
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
  }

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta);
    if (this.pos.x != this.lastXY.x || this.pos.y != this.lastXY.y) {
      this.wsManager.send("move", {
        id: this.id,
        x: this.pos.x,
        y: this.pos.y
      });
      console.log("PlayerOwn moved ", this.id);
    }
    if (this.facing != this.lastState.facing || this.isRunning != this.lastState.isRunning) {
      this.wsManager.send("update", {
        id: this.id,
        facing: this.facing,
        isRunning: this.isRunning
      });
    }
    this.lastXY = { x: this.pos.x, y: this.pos.y };
    this.lastState = { facing: this.facing, isRunning: this.isRunning };
  }

  private easeOutQuint(x: number): number {
    return 1 - (1 - x) ** 5;
  }
}

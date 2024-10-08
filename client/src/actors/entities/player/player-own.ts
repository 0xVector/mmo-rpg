import { Collider, CollisionStartEvent, Engine, Keys, Vector } from "excalibur";
import { WSManager } from "../../../websockets";
import { Player } from "./player";
import { GameManager } from "../../../game-manager";
import { Attack } from "./attack";
import { CustomEntity, Direction } from "../entity";

export class PlayerOwn extends Player {
  static readonly X_ATTACK_OFFSET = { up: 0, down: 0, left: -40, right: 40 };
  static readonly Y_ATTACK_OFFSET = { up: -20, down: 20, left: 20, right: 20 };

  private lastXY: { x: number; y: number };
  private lastState: {
    dir: Direction;
    isMoving: boolean;
    isDashing: boolean;
  };
  private attackEntity: Attack | null;
  private gameManager: GameManager;
  private wsManager: WSManager;

  constructor(netId: string, gameManager: GameManager, wsManager: WSManager) {
    super(netId);
    this.lastState = { dir: "down", isMoving: false, isDashing: false };
    this.attackEntity = null;
    this.gameManager = gameManager;
    this.wsManager = wsManager;
  }

  public onInitialize(engine: Engine) {
    super.onInitialize(engine);
  }

  public override spawn(x: number, y: number): void {
    super.spawn(x, y);
    this.lastXY = { x, y };
  }

  public onPreUpdate(engine: Engine, _delta: number): void {
    super.onPreUpdate(engine, _delta);
    const MAX_SPEED = 400;
    const key = engine.input.keyboard;

    if (key.wasPressed(Keys.Space)) {
      this.tryAttack();
    }

    let targetVel = Vector.Zero;
    if (key.isHeld(Keys.A) || key.isHeld(Keys.D) || key.isHeld(Keys.W) || key.isHeld(Keys.S)) {
      this.isMoving = true;
      if (key.isHeld(Keys.W)) {
        this.dir = "up";
        targetVel = targetVel.add(Vector.Up);
      }
      if (key.isHeld(Keys.S)) {
        this.dir = "down";
        targetVel = targetVel.add(Vector.Down);
      }
      if (key.isHeld(Keys.A)) {
        this.dir = "left";
        targetVel = targetVel.add(Vector.Left);
      }
      if (key.isHeld(Keys.D)) {
        this.dir = "right";
        targetVel = targetVel.add(Vector.Right);
      }
    } else {
      this.isMoving = false;
    }

    targetVel.size = targetVel.size > 0 ? MAX_SPEED : 0;
    this.vel = targetVel;
  }

  public update(engine: Engine, delta: number): void {
    super.update(engine, delta);

    // Send movement updates
    if (this.pos.x != this.lastXY.x || this.pos.y != this.lastXY.y) {
      this.wsManager.send("move", {
        id: this.netId,
        x: this.pos.x,
        y: this.pos.y
      });
    }

    // Send state updates
    if (this.dir != this.lastState.dir || this.isMoving != this.lastState.isMoving) {
      this.wsManager.send("update", {
        id: this.netId,
        dir: this.dir,
        isMoving: this.isMoving,
        isDashing: this.isDashing
      });
    }
    this.lastXY = { x: this.pos.x, y: this.pos.y };
    this.lastState = { dir: this.dir, isMoving: this.isMoving, isDashing: this.isDashing };
  }

  public onPostUpdate(engine: Engine, delta: number): void {
    super.onPostUpdate(engine, delta);

    if (this.attackEntity && this.msSinceLastAttack > Player.MS_PER_ATTACK / 2) {
      this.gameManager.removeEntity(this.attackEntity);
      this.attackEntity.kill();
      this.attackEntity = null;
    }
  }

  public tryAttack(): void {
    if (this.isAttacking) return;
    this.attack();
    this.wsManager.send("attack", { id: this.netId });  // Send attack message (animation)

    // Process the attack locally and send the hits to the server
    this.attackEntity = new Attack(
      this.pos.x + PlayerOwn.X_ATTACK_OFFSET[this.dir],
      this.pos.y + PlayerOwn.Y_ATTACK_OFFSET[this.dir]
    );
    this.gameManager.addEntity(this.attackEntity);

    const collider = this.attackEntity.collider.get();
    collider.events.on("collisionstart", (e: CollisionStartEvent<Collider>) => {
      if (!e.other.owner || !(e.other.owner instanceof CustomEntity)) return;

      const target = e.other.owner as CustomEntity;
      if (target.netId === this.netId) return; // Don't hit yourself
      this.wsManager.send("hit", { id: this.netId, targetId: target.netId });
    });

    // this.wsManager.send("attack", { id: this.netId });
  }
}

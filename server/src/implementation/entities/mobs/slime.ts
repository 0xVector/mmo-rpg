import { Mob } from "./mob";
import { EntityType } from "../entity";
import { ServerService } from "server/server.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { EntityMoveEvent } from "server/server.event";

export class Slime extends Mob {
  static readonly MAX_HP = 2;
  static readonly MAX_SPEED = 200;
  static readonly MAX_MOVE_DISTANCE = 100;
  static readonly JUMP_INTERVAL_TICKS = 15;

  private lastMoveTick: number;

  constructor(x: number, y: number) {
    super(EntityType.SLIME, x, y, Slime.MAX_HP);
    this.lastMoveTick = 0;
    this.speed = Math.random() * Slime.MAX_SPEED;
    this.lastMoveTick = 10;
  }

  public override tick(tick: number, server: ServerService, eventEmitter: EventEmitter2): void {
    if (tick - this.lastMoveTick > Slime.JUMP_INTERVAL_TICKS) {
      eventEmitter.emit("entity.move", this.movement());
      this.lastMoveTick = tick;
    }
  }

  public movement(): EntityMoveEvent {
    const x = Math.floor((Math.random() < 0.5 ? 1 : -1) * Math.random() * Slime.MAX_MOVE_DISTANCE);
    const y = Math.floor((Math.random() < 0.5 ? 1 : -1) * Math.random() * Slime.MAX_MOVE_DISTANCE);
    return this.moveTo(this.x + x, this.y + y);
  }
}

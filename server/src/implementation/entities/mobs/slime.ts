import { Mob } from "./mob";
import { EntityType } from "../entity";
import { ServerService } from "server/server.service";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { EntityMoveEvent } from "server/server.event";

/** Slime mob */
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

  /**
   * The tick method is called every game tick by the server
   * 
   * Moves the slime every few ticks
   * @param tick The current game tick
   * @param serverService A reference to the server service
   * @param eventEmitter A reference to the event emitter
   */
  public override tick(tick: number, serverService: ServerService, eventEmitter: EventEmitter2): void {
    if (tick - this.lastMoveTick > Slime.JUMP_INTERVAL_TICKS) {
      eventEmitter.emit("entity.move", this.movement());
      this.lastMoveTick = tick;
    }
  }

  /**
   * Defines the movement of the slime
   * @returns An event representing the move
   */
  public movement(): EntityMoveEvent {
    const x = Math.floor((Math.random() < 0.5 ? 1 : -1) * Math.random() * Slime.MAX_MOVE_DISTANCE);
    const y = Math.floor((Math.random() < 0.5 ? 1 : -1) * Math.random() * Slime.MAX_MOVE_DISTANCE);
    return this.moveTo(this.x + x, this.y + y);
  }
}

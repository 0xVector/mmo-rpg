import { Mob } from "./mob";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { EntityMoveEvent } from "server/server.event";
import { EntityType } from "../entity";
import { WorldService } from "world/world.service";

/** Slime mob 
 * 
 * Slime is a basic mob that moves randomly.
*/
export class Slime extends Mob {
  static readonly MAX_HP = 2;
  static readonly MAX_SPEED = 200;
  static readonly MAX_MOVE_DISTANCE = 100;
  static readonly JUMP_INTERVAL_TICKS = 15;

  private lastMoveTick: number;

  constructor(x: number, y: number) {
    super(EntityType.SLIME, x, y, Slime.MAX_HP);
    this.lastMoveTick = 0;
    this.speed = Math.max(Math.random(), 0.3) * Slime.MAX_SPEED;
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
  public override tick(tick: number, world: WorldService, eventEmitter: EventEmitter2): void {
    if (tick - this.lastMoveTick > Slime.JUMP_INTERVAL_TICKS) {
      eventEmitter.emit("entity.move", this.movement(world));
      this.lastMoveTick = tick;
    }
  }

  /**
   * Defines the movement of the slime
   * @returns An event representing the move
   */
  public movement(world: WorldService): EntityMoveEvent {
    const target = world.getClosestEntity(this.x, this.y, EntityType.PLAYER) ?? { x: 0, y: 0 };
    const x = target.x - this.x;
    const y = (target.y + 40) - this.y;
    // const x = (target.x - this.x > 0 ? 1 : -1) * Math.min((target.x - this.y), Slime.MAX_MOVE_DISTANCE);
    // const y = (target.y - this.y > 0 ? 1 : -1) * Math.min((target.y - this.y), Slime.MAX_MOVE_DISTANCE);
    return this.moveTo(this.x + x, this.y + y);
  }
}

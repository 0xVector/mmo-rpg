import { Mob } from "./mob";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { EntityMoveEvent } from "updater/updater.event";
import { EntityType } from "../entity";
import { WorldService } from "world/world.service";
import { distance, projectDistance } from "utils/coordinates";

/** Slime mob
 *
 * Slime is a basic mob that moves randomly.
 */
export class Slime extends Mob {
  static readonly MAX_HP = 2;
  static readonly MAX_SPEED = 2;

  constructor(x: number, y: number) {
    super(EntityType.SLIME, x, y, Slime.MAX_HP);
    this.speed = Math.max(Math.random(), 0.3) * Slime.MAX_SPEED;
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
    eventEmitter.emit("entity.move", this.move(WorldService.MS_PER_TICK / 1000, world));
  }

  /**
   * One atomic move of the slime
   *
   * @param time The time in seconds allocated for this move
   * @param world A reference to the world service
   * @returns An event representing the move
   */
  public move(time: number, world: WorldService): EntityMoveEvent {
    const target = world.getClosestEntity(this.x, this.y, EntityType.PLAYER) ?? this;

    const maxDist = Math.min(time * this.speed); // Maximum distance the slime can move in this move
    const dist = Math.min(maxDist, distance(this.x, this.y, target.x, target.y)); // Limit the distance by the remaining distance to the target to avoid oscillations
    const { x, y } = projectDistance(this.x, this.y, target.x, target.y, dist);
    return this.moveTo(x, y);
  }
}

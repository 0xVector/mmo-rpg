import { Mob } from "../mob";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { EntityAttackEvent, EntityMoveEvent } from "updater/updater.event";
import { EntityType } from "../../entity";
import { WorldService } from "world/world.service";
import { distance, projectDistance } from "utils/coordinates";
import { Direction } from "../../creature";

/**
 * Represents an abstract slime mob
 *
 * Slime is a basic mob that follows the player
 */
export abstract class AbstractSlime extends Mob {
  static readonly MAX_HP: number;
  static readonly MAX_SPEED: number;
  protected readonly ATTACK_DISTANCE: number;
  protected readonly ATTACK_COOLDOWN: number = 1;  // in seconds

  protected lastAttackAt: number = 0;  // The last tick the slime attacked

  constructor(type: EntityType, x: number, y: number, hp: number, speed: number) {
    super(type, x, y, hp);
    this.speed = speed;
  }

  /**
   * The tick method is called every game tick by the server
   *
   * Moves the slime every few ticks
   * @param tick The current game tick
   * @param world A reference to the world service
   * @param eventEmitter A reference to the event emitter
   */
  public override tick(tick: number, world: WorldService, eventEmitter: EventEmitter2): void {
    super.tick(tick, world, eventEmitter);
    eventEmitter.emit("entity.move", this.move(WorldService.MS_PER_TICK / 1000, world));
    
    // Attack
    const attack = this.tryAttack(tick, world);
    if (attack) eventEmitter.emit("entity.attack", attack);
  }

  /**
   * One atomic move of the slime
   *
   * @param time The time in seconds allocated for this move
   * @param world A reference to the world service
   * @returns An event representing the move
   */
  public move(time: number, world: WorldService): EntityMoveEvent {
    let target = world.getClosestEntity(this.x, this.y, EntityType.PLAYER) ?? this;
    const dist = distance(this.x, this.y, target.x, target.y);
    if (dist <= this.ATTACK_DISTANCE) target = this; // Don't move closer

    this.isMoving = target != this;

    const maxDist = Math.min(time * this.speed); // Maximum distance the slime can move in this move
    const useDist = Math.min(maxDist, dist); // Limit the distance by the remaining distance to the target to avoid oscillations
    const { x, y } = projectDistance(this.x, this.y, target.x, target.y, useDist);
    return this.moveTo(x, y);
  }

  /**
   * Attempt to attack the nearest player
   * 
   * @param tick The current game tick
   * @param world A reference to the world service
   * @returns An event representing the attack, or null if the slime is not attacking
   */
  public tryAttack(tick: number, world: WorldService): EntityAttackEvent | null {
    if (this.isMoving) return null;
    if ((tick - this.lastAttackAt)*WorldService.MS_PER_TICK/1000 < this.ATTACK_COOLDOWN) return null;

    const target = world.getClosestEntity(this.x, this.y, EntityType.PLAYER);
    if (target && distance(this.x, this.y, target.x, target.y) <= this.ATTACK_DISTANCE) {
      this.lastAttackAt = tick;
      return { id: this.id };
    }
    return null;
  }

  /**
   * Override the default getDirTo method for the horizontally moving slime
   *
   * @param x The x-coordinate of the target
   * @returns The horizontal direction to the target
   */
  protected override getDirTo(x: number, _: number): Direction {
    return x > this.x ? "right" : "left";
  }
}

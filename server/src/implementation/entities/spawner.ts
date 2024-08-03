import { Entity, EntityType } from "./entity";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { Slime } from "./mobs/slime";
import { WorldService } from "world/world.service";

/** A simple spawner that spawns slimes 
 * 
 * Spawner is an entity that periodically spawns some Mob.
*/
export class Spawner extends Entity {
  static TICKS_PER_SPAWN: number = 20;

  private lastSpawnTick: number = 0;

  /**
   * Create a new spawner
   * @param x The x-coordinate of the spawner
   * @param y The y-coordinate of the spawner
   */
  constructor(x: number, y: number) {
    super(EntityType.SPAWNER, "spawnerId", x, y);
    this.hidden = true;
  }

  public override tick(tick: number, world: WorldService, emitter: EventEmitter2): void {
    if (tick - this.lastSpawnTick >= Spawner.TICKS_PER_SPAWN && world.entityCount < 50) {
      this.lastSpawnTick = tick;
      world.spawnEntity(new Slime(this.x, this.y));
    }
  }
}

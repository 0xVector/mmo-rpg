import { Entity, EntityType } from "./entity";
import { ServerService } from "server/server.service";
import { EventEmitter2 } from "@nestjs/event-emitter";

/** A simple spawner that spawns slimes */
export class Spawner extends Entity {
  static TICKS_PER_SPAWN: number = 20;

  private lastSpawnTick: number = 0;

  /**
   * Create a new spawner
   * @param x The x-coordinate of the spawner
   * @param y The y-coordinate of the spawner
   */
  constructor(x: number, y: number) {
    super("spawnerId", EntityType.SPAWNER, x, y);
    this.hidden = true;
  }

  public override tick(tick: number, server: ServerService, emitter: EventEmitter2): void {
    if (tick - this.lastSpawnTick >= Spawner.TICKS_PER_SPAWN && server.entityCount < 50) {
      this.lastSpawnTick = tick;
      server.spawnEntity(EntityType.SLIME, this.x, this.y);
    }
  }
}

import { EventEmitter2 } from "@nestjs/event-emitter";
import { WorldService } from "world/world.service";

export interface Tickable {

  /** Called every tick */
  tick(tickNumber: number, world: WorldService, eventEmitter: EventEmitter2): void;
}

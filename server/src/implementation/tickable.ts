import { EventEmitter2 } from "@nestjs/event-emitter";
import { ServerService } from "server/server.service";

export interface Tickable {

  /**
   * Called every tick
   */
  tick(tickNumber: number, server: ServerService, eventEmitter: EventEmitter2): void;
}

import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import {
  EntitySpawnEvent,
  EntityDespawnEvent,
  EntityMoveEvent,
  PlayerUpdateEvent
} from "./updater.event";
import { ServerService } from "../server/server.service";

/** The updater service
 *
 * This service listens for server events and broadcasts updates to all connected clients.
 */
@Injectable()
export class UpdaterService {
  constructor(private server: ServerService) {}

  @OnEvent("entity.spawn")
  entitySpawned(event: EntitySpawnEvent) {
    this.server.broadcast("entity-spawn", {
      id: event.id,
      entity: event.entity,
      x: event.x,
      y: event.y
    });
  }

  @OnEvent("entity.despawn")
  entityDespawned(event: EntityDespawnEvent) {
    this.server.broadcast("entity-despawn", {
      id: event.id
    });
  }

  @OnEvent("entity.move")
  entityMoved(event: EntityMoveEvent) {
    this.server.broadcast("entity-move", {
      id: event.id,
      x: event.x,
      y: event.y,
      speed: event.speed
    });
  }

  @OnEvent("player.update")
  playerUpdated(event: PlayerUpdateEvent) {
    this.server.broadcast("player-update", {
      id: event.id,
      facing: event.facing,
      isRunning: event.isRunning,
      isAttacking: event.isAttacking
    });
  }
}

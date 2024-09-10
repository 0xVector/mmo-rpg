import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import {
  EntitySpawnEvent,
  EntityDespawnEvent,
  EntityMoveEvent,
  EntityUpdateEvent,
  EntityAttackEvent,
  EntityDamageEvent,
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
      time: event.time
    });
  }

  @OnEvent("entity.update")
  playerUpdated(event: EntityUpdateEvent) {
    this.server.broadcast("entity-update", {
      id: event.id,
      dir: event.dir,
      isMoving: event.isMoving,
      isDashing: event.isDashing,
      hp: event.hp,
      score: event.score
    });
  }

  @OnEvent("entity.attack")
  entityAttacked(event: EntityAttackEvent) {
    this.server.broadcast("entity-attack", {
      id: event.id
    });
  }

  @OnEvent("entity.damage")
  entityDamaged(event: EntityDamageEvent) {
    this.server.broadcast("entity-damage", {
      id: event.id,
      damage: event.damage,
      sourceX: event.sourceX,
      sourceY: event.sourceY
    });
  }
}

import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import {
  PlayerSpawnEvent,
  PlayerDespawnEvent,
  PlayerMoveEvent,
  PlayerUpdateEvent
} from "server/server.event";
import { ServerService } from "server/server.service";

@Injectable()
export class UpdaterService {
  private server: ServerService;

  constructor(server: ServerService) {
    this.server = server;
  }

  @OnEvent("player.spawn")
  playerSpawned(event: PlayerSpawnEvent) {
    this.server.broadcast("player-spawn", {
      id: event.id,
      x: event.x,
      y: event.y
    });
  }

  @OnEvent("player.despawn")
  playerDespawned(event: PlayerDespawnEvent) {
    this.server.broadcast("player-despawn", { id: event.id });
  }

  @OnEvent("player.move")
  playerMoved(event: PlayerMoveEvent) {
    this.server.broadcast("player-move", {
      id: event.id,
      x: event.x,
      y: event.y
    });
  }

  @OnEvent("player.update")
  playerUpdated(event: PlayerUpdateEvent) {
    this.server.broadcast("player-update", {
      id: event.id,
      facing: event.facing,
      isRunning: event.isRunning
    });
  }
}

import { Engine, Scene } from "excalibur";
import { WSManager } from "./websockets";
import {
  EntityDespawnEvent,
  EntityMoveEvent,
  EntitySpawnEvent,
  EntityUpdateEvent,
  HeartbeatEvent,
  JoinEvent,
  LeaveEvent,
  PlayerAttackEvent
} from "./events";
import { CustomEntity } from "./actors/entities/entity";
import { PlayerOwn } from "./actors/entities/player/player-own";
import { createEntity } from "./actors/entities/entity-factory";
import { Player } from "./actors/entities/player/player";

export class GameManager {
  private game: Engine;
  private ws: WSManager;
  private mainScene: Scene;
  private entities: Map<string, CustomEntity> = new Map();
  private netId: string;
  private ownPlayer: PlayerOwn;

  constructor(game: Engine, ws: WSManager, mainScene: Scene) {
    this.game = game;
    this.ws = ws;
    this.mainScene = mainScene;
    this.registerHandlers();
  }

  public init() {
    this.ws.waitForConnection().then(() => {
      this.ws.send("join", { playerName: "Player" });
    });
  }

  public onLoaded() {
    this.ws.send("spawn", { id: this.netId });
  }

  public addEntity(entity: CustomEntity) {
    this.entities.set(entity.netId, entity);
    this.mainScene.add(entity);
  }

  public removeEntity(entity: CustomEntity) {
    this.entities.delete(entity.netId);
    this.mainScene.remove(entity);
  }

  private registerHandlers() {
    this.ws.registerHandler("heartbeat", this.replyHeartbeat.bind(this));
    this.ws.registerHandler("join", this.handleJoin.bind(this));
    this.ws.registerHandler("leave", this.handleLeave.bind(this));
    this.ws.registerHandler("entity-spawn", this.handleEntitySpawn.bind(this));
    this.ws.registerHandler("entity-despawn", this.handleEntityDespawn.bind(this));
    this.ws.registerHandler("entity-move", this.handleEntityMove.bind(this));
    this.ws.registerHandler("entity-update", this.handleEntityUpdate.bind(this));
    this.ws.registerHandler("player-attack", this.handlePlayerAttack.bind(this));
  }

  private replyHeartbeat(data: HeartbeatEvent) {
    this.ws.send("heartbeat", { id: data.id });
  }

  private handleJoin(data: JoinEvent) {
    this.netId = data.id;
  }

  private handleLeave(data: LeaveEvent) {
    this.ownPlayer.despawn();
  }

  private handleEntitySpawn(data: EntitySpawnEvent) {
    let entity: CustomEntity;
    if (data.id === this.netId) {
      entity = new PlayerOwn(data.id, this, this.ws);
      this.ownPlayer = entity as PlayerOwn;
      this.game.currentScene.camera.strategy.elasticToActor(entity, 0.5, 0.7);
    } else {
      entity = createEntity(data.entity, data.id);
    }

    this.entities.set(entity.netId, entity);
    entity.spawn(data.x, data.y);
    this.mainScene.add(entity);
  }

  private handleEntityDespawn(data: EntityDespawnEvent) {
    const entity = this.entities.get(data.id);
    if (entity) {
      entity.despawn();
      this.entities.delete(data.id);
    }
  }

  private handleEntityMove(data: EntityMoveEvent) {
    const entity = this.entities.get(data.id);
    if (entity && entity !== this.ownPlayer) {
      entity.moveOverTime(data.x, data.y, data.time);
    }
  }

  private handleEntityUpdate(data: EntityUpdateEvent) {
    const entity = this.entities.get(data.id);
    if (entity && entity != this.ownPlayer) {
      entity.dir = data.dir;
      entity.isMoving = data.isMoving;
      entity.isDashing = data.isDashing;
    }
  }

  private handlePlayerAttack(data: PlayerAttackEvent) {
    const player = this.entities.get(data.id) as Player;
    if (player && player != this.ownPlayer) player.attack();
  }
}

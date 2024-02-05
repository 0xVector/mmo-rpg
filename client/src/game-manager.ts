import { Engine, Scene } from "excalibur";
import { WSManager } from "./websockets";
import {
  JoinEvent,
  LeaveEvent,
  PlayerDespawnEvent,
  PlayerMoveEvent,
  PlayerSpawnEvent
} from "./events";
import { Player } from "./actors/player/player";
import { PlayerOwn } from "./actors/player/player-own";

export class GameManager {
  private game: Engine;
  private ws: WSManager;
  private mainScene: Scene;
  private players: Map<string, Player> = new Map();
  private uuid: string;
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
    console.log({ id: this.uuid });
    this.ws.send("spawn", { id: this.uuid })
    console.log("Loaded!");
  }

  private registerHandlers() {
    this.ws.registerHandler("join", this.handleJoin.bind(this));
    this.ws.registerHandler("leave", this.handleLeave.bind(this));
    this.ws.registerHandler("player-spawn", this.handlePlayerSpawn.bind(this));
    this.ws.registerHandler("player-despawn", this.handlePlayerDespawn.bind(this));
    this.ws.registerHandler("player-move", this.handlePlayerMove.bind(this));
  }

  private handleJoin(data: JoinEvent) {
    this.uuid = data.id;
    console.log("Joined!");
  }

  private handleLeave(data: LeaveEvent) {
    this.ownPlayer.despawn();
  }

  private handlePlayerSpawn(data: PlayerSpawnEvent) {
    let player: Player;
    console.log(data.id, this.uuid)
    if (data.id === this.uuid) {
      player = new PlayerOwn(data.id, 200, 200, this.ws);
      this.ownPlayer = player as PlayerOwn;
      this.game.currentScene.camera.strategy.elasticToActor(player, 0.5, 0.7);
    } else {
        player = new Player(data.id, data.x, data.y, this.ws);
    }

    this.players.set(player.uuid, player);
    this.mainScene.add(player);
    console.log("Player spawned!")
  }

  private handlePlayerDespawn(data: PlayerDespawnEvent) {
    const player = this.players.get(data.id);
    if (player) {
      player.despawn();
      this.players.delete(data.id);
    }
  }

  private handlePlayerMove(data: PlayerMoveEvent) {
    const player = this.players.get(data.id);
    if (player && player !== this.ownPlayer) {
      player.move(data.x, data.y);
    }
  }
}

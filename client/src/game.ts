import { Engine } from "excalibur";
import { Player } from "./actors/player";
import { loader } from "./resources";
import { WorldScene } from "./scenes/world";
import { WSManager } from "./websockets";

const wsManager = new WSManager();
wsManager.waitForConnection().then(() => {
  wsManager.send("join", { playerName: "Player" });
});

const game = new Engine({});

game.start(loader);
game.add("main", new WorldScene(wsManager));
game.goToScene("main");
game.showDebug(true);
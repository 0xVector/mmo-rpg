import { Engine } from "excalibur";
import { loader } from "./resources";
import { WorldScene } from "./scenes/world";
import { WSManager } from "./websockets";
import { GameManager } from "./game-manager";

const wsManager = new WSManager();
const game = new Engine({});
const mainScene = new WorldScene(wsManager);

const gameManager = new GameManager(game, wsManager, mainScene);
gameManager.init();

loader.onUserAction().then(() => {gameManager.onLoaded.bind(gameManager)()});

game.start(loader);
game.add("main", mainScene);
game.goToScene("main");
game.showDebug(true);
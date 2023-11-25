import { Engine } from "excalibur";
import { Player } from "./actors/player";
import { loader } from "./resources";
import {WorldScene} from "./scenes/world";

const game = new Engine({
});

game.start(loader);
game.add("main", new WorldScene());
game.goToScene("main");
game.showDebug(true);
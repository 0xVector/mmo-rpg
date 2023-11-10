import { Engine } from "excalibur";
import { Player } from "./actors/player";
import { loader } from "./resources";
import {MainScene} from "./scenes/main";

const game = new Engine({
});

game.start(loader);
game.add("main", new MainScene());
game.goToScene("main");
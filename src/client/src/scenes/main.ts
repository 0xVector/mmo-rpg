import { Engine, Scene } from "excalibur";
import { Player } from "../actors/player";

export class MainScene extends Scene {
    public onInitialize(_engine: Engine): void {
        this.add(new Player());
    }
}
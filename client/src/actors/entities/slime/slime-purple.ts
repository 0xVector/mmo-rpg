import { Color } from "excalibur";
import { Slime } from "./slime";

export class SlimePurple extends Slime {
    public static override MAX_HP = 4;

    constructor(netId: string) {
        super(netId);
        this.hp = SlimePurple.MAX_HP;
        this.color = Color.Violet;
    }
}
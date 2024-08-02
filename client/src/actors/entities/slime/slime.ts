import { CollisionType, Engine, Shape, vec } from "excalibur";
import { CustomEntity } from "../entity";
import { SLIME_SIZE, animations } from "./slime-sprites";

export class Slime extends CustomEntity {

    constructor(netId: string) {
        super(netId, {
            width: 16*SLIME_SIZE,
            height: 12*SLIME_SIZE,
            collisionType: CollisionType.Active,
            collider: Shape.Box(10 * SLIME_SIZE, 3 * SLIME_SIZE, vec(0.5, 0.5), vec(0, 4 * SLIME_SIZE))
        });
    }

    public onInitialize(engine: Engine): void {
        this.graphics.add("idle", animations.idleAnim);
        this.graphics.use("idle");
        this.z = 200;
    }

    public onPreUpdate(_engine: any, _delta: number): void {}

    public update(_engine: any, _delta: number): void {}
}
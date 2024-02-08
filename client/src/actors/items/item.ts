import { Engine, Actor, Sprite, vec, CollisionType } from "excalibur";
import { images } from "../../resources";

export class Item extends Actor {
  constructor(x: number, y: number) {
    super({
      x: x,
      y: y,
      width: 30,
      height: 30,
      collisionType: CollisionType.Fixed,
    });
  }

  public onInitialize(engine: Engine) {
    const stone = new Sprite({
      image: images.objectsImage,
      sourceView: {
        x: 0,
        y: 17,
        width: 15,
        height: 15,
      },
      destSize: {
        width: 30,
        height: 30,
      },
    });
    this.graphics.add("stone", stone);
    this.graphics.use("stone");
  }
}

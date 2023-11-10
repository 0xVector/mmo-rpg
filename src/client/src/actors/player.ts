import {
  Actor,
  Color,
  Engine,
  Sprite,
  SpriteSheet,
} from "excalibur";
import { images } from "../resources";

const sprite = new Sprite({
  image: images.playerImage,
  sourceView: {
    x: 18,
    y: 22,
    width: 13,
    height: 21,
  },
  destSize: {
    width: 100,
    height: 100,
  },
});
const spriteSheet = SpriteSheet.fromImageSource({
  image: images.playerImage,
  grid: {
    rows: 6,
    columns: 6,
    spriteWidth: 13,
    spriteHeight: 21,
  },
  spacing: {
    // Optionally specify the offset from the top left of sheet to start parsing
    originOffset: { x: 18, y: 22 },
    // Optionally specify the margin between each sprite
    margin: { x: 48, y: 27 },
  },
});

export class Player extends Actor {
  constructor() {
    super({
      x: 200,
      y: 200,
      color: Color.Red,
    });
  }

  onInitialize(engine: Engine) {
    console.log("Player spawned");
    this.graphics.use(sprite);
  }
}

import { Animation, AnimationStrategy, Sprite, SpriteSheet, range } from "excalibur";
import { images } from "../../../resources";

export const SLIME_SIZE = 3;
const SLIME_ANIMATION_SPEED = 200;

export const spriteSheet = SpriteSheet.fromImageSource({
  image: images.slimeImage,
  grid: {
    rows: 1,
    columns: 4,
    spriteWidth: 16,
    spriteHeight: 12 // 21
  },
  spacing: {
    originOffset: { x: 8, y: 12 },
    margin: { x: 16, y: 0 } // 32?
  }
});

// Set destSize for all sprites
for (let sprite of spriteSheet.sprites) {
  sprite.destSize = { height: 12 * SLIME_SIZE, width: 16 * SLIME_SIZE };
}

// Animations
export const animations = {
  idleAnim: Animation.fromSpriteSheet(spriteSheet, range(0, 3), SLIME_ANIMATION_SPEED, AnimationStrategy.Loop)
};

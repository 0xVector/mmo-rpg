import { Animation, AnimationStrategy, Sprite, SpriteSheet, range } from "excalibur";
import { images } from "../../resources";

export const PLAYER_SIZE = 5;
export const PLAYER_ANIMATION_SPEED = 200;

export const sprite = new Sprite({
  image: images.playerImage,
  sourceView: {
    x: 18,
    y: 22,
    width: 13,
    height: 21
  },
  destSize: {
    width: 18 * PLAYER_SIZE,
    height: 22 * PLAYER_SIZE
  }
});

export const spriteSheet = SpriteSheet.fromImageSource({
  image: images.playerImage,
  grid: {
    rows: 6,
    columns: 6,
    spriteWidth: 15,
    spriteHeight: 23 // 21
  },
  spacing: {
    originOffset: { x: 17, y: 20 }, // y: 22
    margin: { x: 33, y: 25 }
  }
});

// Animations
export const animations = {
  idleDownAnim: Animation.fromSpriteSheet(spriteSheet, range(0, 5), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleUpAnim: Animation.fromSpriteSheet(spriteSheet, range(12, 17), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleRightAnim: Animation.fromSpriteSheet(spriteSheet, range(6, 11), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleLeftAnim: Animation.fromSpriteSheet(spriteSheet, range(6, 11), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runDownAnim: Animation.fromSpriteSheet(spriteSheet, range(18, 23), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runUpAnim: Animation.fromSpriteSheet(spriteSheet, range(30, 35), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runRightAnim: Animation.fromSpriteSheet(spriteSheet, range(24, 29), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runLeftAnim: Animation.fromSpriteSheet(spriteSheet, range(24, 29), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop)
};
animations.idleLeftAnim.flipHorizontal = true;
animations.runLeftAnim.flipHorizontal = true;

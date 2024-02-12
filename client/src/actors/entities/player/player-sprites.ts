import { Animation, AnimationStrategy, Sprite, SpriteSheet, range } from "excalibur";
import { images } from "../../../resources";

export const PLAYER_SIZE = 5;
const PLAYER_ANIMATION_SPEED = 200;
const ATTACK_SPEED = 100;

const sprite = new Sprite({
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

const spriteSheet = SpriteSheet.fromImageSource({
  image: images.playerImage,
  grid: {
    rows: 10,
    columns: 6,
    spriteWidth: 15,
    spriteHeight: 23 // 21
  },
  spacing: {
    originOffset: { x: 17, y: 20 }, // y: 22
    margin: { x: 33, y: 25 }
  }
});
// Set destSize for all sprites
for (let sprite of spriteSheet.sprites) {
  sprite.destSize = { height: 23 * PLAYER_SIZE, width: 15 * PLAYER_SIZE };
}

const sparseSpriteSheet = SpriteSheet.fromImageSourceWithSourceViews({
  image: images.playerImage,
  sourceViews: [
    { x: 15, y: 311, width: 16, height: 20 },
    { x: 65, y: 310, width: 20, height: 26 },
    { x: 114, y: 311, width: 19, height: 21 },
    { x: 162, y: 312, width: 13, height: 19 },

    { x: 19, y: 359, width: 16, height: 20 },
    { x: 56, y: 358, width: 34, height: 23 },
    { x: 107, y: 358, width: 20, height: 21 },
    { x: 161, y: 360, width: 15, height: 19 },

    { x: 18, y: 407, width: 17, height: 20 },
    { x: 59, y: 406, width: 22, height: 21 },
    { x: 108, y: 407, width: 19, height: 20 },
    { x: 162, y: 408, width: 13, height: 19 },
  ]
});
// Set destSize for all sprites
for (let sprite of sparseSpriteSheet.sprites) {
  sprite.destSize = { height: sprite.height * PLAYER_SIZE, width: sprite.width * PLAYER_SIZE };
}

// Animations
export const animations = {
  idleDownAnim: Animation.fromSpriteSheet(spriteSheet, range(0, 5), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleUpAnim: Animation.fromSpriteSheet(spriteSheet, range(12, 17), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleRightAnim: Animation.fromSpriteSheet(spriteSheet, range(6, 11), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  idleLeftAnim: Animation.fromSpriteSheet(spriteSheet, range(6, 11), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runDownAnim: Animation.fromSpriteSheet(spriteSheet, range(18, 23), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runUpAnim: Animation.fromSpriteSheet(spriteSheet, range(30, 35), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runRightAnim: Animation.fromSpriteSheet(spriteSheet, range(24, 29), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  runLeftAnim: Animation.fromSpriteSheet(spriteSheet, range(24, 29), PLAYER_ANIMATION_SPEED, AnimationStrategy.Loop),
  attackDownAnim: Animation.fromSpriteSheet(sparseSpriteSheet, range(0, 3), ATTACK_SPEED, AnimationStrategy.Loop),
  attackRightAnim: Animation.fromSpriteSheet(sparseSpriteSheet, range(4, 7), ATTACK_SPEED, AnimationStrategy.Loop),
  attackLeftAnim: Animation.fromSpriteSheet(sparseSpriteSheet, range(4, 7), ATTACK_SPEED, AnimationStrategy.Loop),
  attackUpAnim: Animation.fromSpriteSheet(sparseSpriteSheet, range(8, 11), ATTACK_SPEED, AnimationStrategy.Loop),
  deathAnim: Animation.fromSpriteSheet(spriteSheet, range(54, 56), PLAYER_ANIMATION_SPEED, AnimationStrategy.Freeze)
};
animations.idleLeftAnim.flipHorizontal = true;
animations.runLeftAnim.flipHorizontal = true;
animations.attackLeftAnim.flipHorizontal = true;

import { Sprite } from "excalibur";
import { images } from "../resources";

export const tileSprite = new Sprite({
    image: images.objectsImage,
    sourceView: {
        x: 81,
        y: 3,
        width: 14,
        height: 14,
    },
    destSize: {
        width: 14*3,
        height: 14*3
    }
});

export const tileSprite2 = new Sprite({
    image: images.grassImage,
    sourceView: {
        x: 0,
        y: 0,
        width: 16,
        height: 16,
    },
    destSize: {
        width: 16*3,
        height: 16*3
    }
});
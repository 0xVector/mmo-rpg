import { ImageSource, Loader } from "excalibur";

export const images = {
    playerImage: new ImageSource("./assets/sprites/characters/player.png"),
    objectsImage: new ImageSource("./assets/sprites/objects/objects.png"),
    grassImage: new ImageSource("./assets/sprites/tilesets/grass.png"),
}

export const loader = new Loader();
const allResources = { ...images};
for (const [k, res] of Object.entries(allResources)) {
  loader.addResource(res);
}
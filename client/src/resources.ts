import { ImageSource, Loader } from "excalibur";

export const images = {
    playerImage: new ImageSource("./assets/sprites/characters/player.png"),
    objectsImage: new ImageSource("./assets/sprites/objects/objects.png"),
    grassImage: new ImageSource("./assets/sprites/tilesets/grass.png"),
    slimeImage: new ImageSource("./assets/sprites/characters/slime.png"),
}

export const loader = new Loader();
loader.logoWidth = 0;
loader.logoHeight = 0;
const allResources = { ...images};
for (const [k, res] of Object.entries(allResources)) {
  loader.addResource(res);
}
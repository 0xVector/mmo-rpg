import { Engine, IsometricMap, Scene, Sprite } from "excalibur";
import { Player } from "../actors/player";
import { Item } from "../actors/item";
import { images } from "../resources";
import { WSManager } from "../websockets";

export class WorldScene extends Scene {
    private wsManager: WSManager;

    constructor(wsManager: WSManager) {
        super();
        this.wsManager = wsManager;
    }

    public onInitialize(_engine: Engine): void {
        const player = new Player(200, 200, this.wsManager);
        this.add(player);
        this.add(new Item(100, 100));
        this.add(new Item(400, 300));

        const isoMap = new IsometricMap({
            columns: 3,
            rows: 1,
            tileWidth: 16*3,
            tileHeight: 8*3,
        });
        const tileSprite = new Sprite({
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
        const tileSprite2 = new Sprite({
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
        for (let tile of isoMap.tiles) {
            tile.addGraphic(tileSprite2);
        }
        // this.add(isoMap);

        this.camera.strategy.elasticToActor(player, .5, .7);
    }
}
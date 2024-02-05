import { Engine, IsometricMap, Scene } from "excalibur";
import { Item } from "../actors/item";
import { WSManager } from "../websockets";
import { tileSprite2 } from "./world-sprites";

export class WorldScene extends Scene {
    private wsManager: WSManager;

    constructor(wsManager: WSManager) {
        super();
        this.wsManager = wsManager;
    }

    public onInitialize(_engine: Engine): void {
        this.add(new Item(100, 100));
        this.add(new Item(400, 300));

        const isoMap = new IsometricMap({
            columns: 3,
            rows: 1,
            tileWidth: 16*3,
            tileHeight: 8*3,
        });
        
        for (let tile of isoMap.tiles) {
            tile.addGraphic(tileSprite2);
        }
        // this.add(isoMap);
    }
}
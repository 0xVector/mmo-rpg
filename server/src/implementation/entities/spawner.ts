import { Entity, EntityType } from "./entity";
import { ServerService } from "server/server.service";
import { EventEmitter2 } from "@nestjs/event-emitter";

export class Spawner extends Entity {
    static TICKS_PER_SPAWN: number = 20;

    private lastSpawnTick: number = 0;

    constructor(x: number, y: number) {
        super("spawnerId", EntityType.SPAWNER, x, y);
        this.hidden = true;
    }

    public override tick(tick: number, server: ServerService, emitter: EventEmitter2): void {
        if (tick - this.lastSpawnTick >= Spawner.TICKS_PER_SPAWN) {
            this.lastSpawnTick = tick;
            server.spawnEntity(EntityType.SLIME, this.x, this.y);
        }
    }
}
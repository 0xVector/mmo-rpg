import { Interval } from "@nestjs/schedule";
import { EntityType } from "./entities/entity";
import { ServerService } from "server/server.service";

export class Spawner {
    static SPAWN_INTERVAL: number = 5000;

    public x: number;
    public y: number;
    public entityType: EntityType;
    private server: ServerService;

    constructor(x: number, y: number, entityType: EntityType, server: ServerService) {
        this.x = x;
        this.y = y;
        this.entityType = entityType;
        this.server = server;
        console.log(`Spawner created at ${x}, ${y}`);
    }

    @Interval(3000) //Spawner.SPAWN_INTERVAL)
    spawn() {
        this.server.spawnEntity(this.entityType, this.x, this.y);
        console.log(`Spawned ${this.entityType} at ${this.x}, ${this.y}`);
    }
}
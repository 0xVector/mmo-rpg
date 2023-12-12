import { randomBytes } from "crypto";
import { v4 as uuid } from "uuid";
import { Player } from "./player";

export class Client {
    public id: string;
    public lastHeartbeat: number;
    public player: Player;
    public playerName: string;

    constructor(playerName: string) {
        this.id = uuid();
        this.lastHeartbeat = Date.now();
        this.player = new Player(this.id, 'name');
        this.playerName = playerName;
    }

    public heartbeat(): void {
        this.lastHeartbeat = Date.now();
    }
}
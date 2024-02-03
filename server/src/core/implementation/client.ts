import { v4 as uuid } from "uuid";
import { Player } from "./player";

export class Client {
    public socket: WebSocket;
    public id: string;
    public lastHeartbeat: number;
    public player: Player = null;

    constructor(socket: WebSocket) {
        this.socket = socket;
        this.id = "id"; //uuid(); TODO
        this.lastHeartbeat = Date.now();
    }

    public heartbeat(): void {
        this.lastHeartbeat = Date.now();
    }
}
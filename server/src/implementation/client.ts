import { v4 as uuid } from "uuid";
import { Player } from "./entities/player";

/** Represents a client connected to the server */
export class Client {
  /** The WebSocket connection to the client */
  public socket: WebSocket;
  /** The unique identifier (UUID) for the client */
  public id: string;
  /** The time of the last heartbeat received from the client */
  public lastHeartbeat: number;
  /** The player entity associated with the client */
  public player: Player = null;

  /**
   * Create a new client
   * @param socket The WebSocket connection to the client
   */
  constructor(socket: WebSocket) {
    this.socket = socket;
    this.id = uuid();
    this.lastHeartbeat = Date.now();
  }

  /** Process a heartbeat from the client */
  public heartbeat(): void {
    this.lastHeartbeat = Date.now();
  }
}

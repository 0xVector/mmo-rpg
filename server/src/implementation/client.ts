import { v4 as uuid } from "uuid";

/** Represents a client connected to the server */
export class Client {
  /** The WebSocket connection to the client */
  public socket: WebSocket;
  /** The unique identifier (UUID) for the client */
  public id: string;
  /** The time of the last heartbeat received from the client */
  public lastHeartbeat: number;
  /** The name of the player */
  public playerName: string

  /**
   * Create a new client
   * @param socket The WebSocket connection to the client
   */
  constructor(socket: WebSocket, playerName: string) {
    this.socket = socket;
    this.playerName = playerName;
    this.id = uuid();
    this.lastHeartbeat = Date.now();
  }

  /** Process a heartbeat from the client */
  public heartbeat(): void {
    this.lastHeartbeat = Date.now();
  }
}

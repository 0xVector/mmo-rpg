import { rescaleDataFromPixels, rescaleDataFromUnits } from "./units";

export class WSManager {
  private socket: WebSocket;
  private handlers: Map<string, Function> = new Map();

  constructor() {
    this.socket = new WebSocket("ws://localhost:3000");
    this.socket.onopen = () => {
      console.log("Connected");
    };

    this.socket.onmessage = (message) => {
      const {event, data} = JSON.parse(String(message.data));
      const handler = this.handlers.get(event) ?? (() => {});
      rescaleDataFromUnits(data);
      handler(data);
    };
  }

  public async waitForConnection(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.socket.onopen = () => {
        resolve();
      };
    });
  }

  public send(event: string, data: any): void {
    rescaleDataFromPixels(data);
    this.socket.send(JSON.stringify({ event: event, data: data }));
  }

  public registerHandler(event: string, handler: Function): void {
    this.handlers.set(event, handler);
  }
}

export class WSManager {
  public id: string | undefined;
  private socket: WebSocket;
  private handlers: Map<string, Function> = new Map();

  constructor() {
    this.socket = new WebSocket("ws://localhost:3000");
    this.registerHandler("join", (data: any) => {
      this.id = data.id;
    });

    this.socket.onopen = () => {
      console.log("Connected");
    };

    this.socket.onmessage = (message) => {
      const {event, data} = JSON.parse(String(message.data));
      const handler = this.handlers.get(event) ?? (() => {});
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
    data.id = this.id;
    this.socket.send(JSON.stringify({ event: event, data: data }));
  }

  public registerHandler(event: string, handler: Function): void {
    this.handlers.set(event, handler);
  }
}

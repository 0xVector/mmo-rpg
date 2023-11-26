import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server} from "ws";

@WebSocketGateway(3001, {
  transports: ['websockets'],
  // cors: {
  //   origin: '*',
  // },
})
export class CoreGateway {
  @WebSocketServer()
  server: Server;

  async handleConnection() {
    console.log('connected');
  }

  async handleDisconnect() {
    console.log('disconnected');
  }

  @SubscribeMessage('ping')
  handleMessage(@MessageBody() data: string): string {
    console.log(data);
    return 'pong';
  }
}

import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';
import { UsePipes, ValidationPipe } from '@nestjs/common';
import { CoreService } from './core.service';
import { HeartbeatDto, JoinDto, JoinResponseDto } from './core.gateway.dto';

@WebSocketGateway({
  transports: ['websockets'],
  // cors: {
  //   origin: '*',
  // },
})
@UsePipes(ValidationPipe)
export class CoreGateway {
  @WebSocketServer()
  server: typeof Server;

  constructor(private coreService: CoreService) {}

  async handleConnection() {
    console.log('New connection');
  }

  async handleDisconnect() {
    console.log('Disconnected');
  }

  @SubscribeMessage('join')
  handleJoin(
    @MessageBody() data: JoinDto,
    @ConnectedSocket() socket: WebSocket,
  ): { event: 'join'; data: JoinResponseDto } {
    console.log(`Player ${data.playerName} joined`);
    return {
      event: 'join',
      data: { id: this.coreService.registerClient(data.playerName) },
    };
  }

  @SubscribeMessage('heartbeat')
  handleMessage(@MessageBody() data: HeartbeatDto): void {
    this.coreService.heartbeat(data.id);
  }

  @SubscribeMessage('playerUpdate')
  handlePlayerUpdate(@MessageBody() data: any): void {
    console.log('playerUpdate', data);
  }
}

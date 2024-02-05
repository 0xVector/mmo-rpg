import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { WebSocket, WebSocketServer as WSServer } from "ws";
import { UsePipes, ValidationPipe } from "@nestjs/common";
import { CoreService } from "./core.service";
import {
  HeartbeatDto,
  JoinDto,
  LeaveDto,
  PlayerMoveDto,
  SpawnDto
} from "./core.gateway.dto";

@WebSocketGateway({
  transports: ["websocket"]
  // cors: {
  //   origin: '*',
  // },
})
@UsePipes(new ValidationPipe({ transform: true }))
export class CoreGateway {
  @WebSocketServer()
  server: WSServer;

  constructor(private coreService: CoreService) {}

  async handleConnection() {
    console.log("New connection");
  }

  async handleDisconnect() {
    console.log("Disconnected");
  }

  @SubscribeMessage("heartbeat")
  handleMessage(@MessageBody() data: HeartbeatDto): void {
    this.coreService.receiveHeartbeat(data.id);
  }

  @SubscribeMessage("join")
  handleJoin(
    @MessageBody() data: JoinDto,
    @ConnectedSocket() socket: WebSocket
  ) {
    const id = this.coreService.joinClient(socket, data.playerName);
    return {
      event: "join",
      data: { id: id }
    };
  }

  @SubscribeMessage("leave")
  handleLeave(@MessageBody() data: LeaveDto) {
    this.coreService.leaveClient(data.id);
    return { event: "leave", data: { id: data.id } };
  }

  @SubscribeMessage("spawn")
  handleSpawn(@MessageBody() data: SpawnDto) {
    this.coreService.spawnPlayer(data.id);
  }

  @SubscribeMessage("player-move")
  handlePlayerUpdate(@MessageBody() data: PlayerMoveDto): void {
    this.coreService.movePlayer(data);
  }
}

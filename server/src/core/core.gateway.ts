import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway
} from "@nestjs/websockets";
import { WebSocket, WebSocketServer as WSServer } from "ws";
import { UsePipes, ValidationPipe } from "@nestjs/common";
import { CoreService } from "./core.service";
import {
  AttackDto,
  HeartbeatDto,
  JoinDto,
  LeaveDto,
  PlayerMoveDto,
  PlayerUpdateDto,
  SpawnDto
} from "./core.gateway.dto";

/** The core WebSocket gateway */
@WebSocketGateway({ transports: ["websocket"] })
@UsePipes(new ValidationPipe({ transform: true }))
export class CoreGateway {
  constructor(private coreService: CoreService) {}

  /** Handle a new connection */
  async handleConnection() {
    console.log("New connection");
  }

  /** Handle a disconnect */
  async handleDisconnect() {
    console.log("Disconnected");
  }

  /** Handle a heartbeat message */
  @SubscribeMessage("heartbeat")
  handleMessage(@MessageBody() data: HeartbeatDto): void {
    this.coreService.receiveHeartbeat(data.id);
  }

  /** Handle a join message
   *
   * @returns The join event
   */
  @SubscribeMessage("join")
  handleJoin(@MessageBody() data: JoinDto, @ConnectedSocket() socket: WebSocket) {
    const id = this.coreService.joinClient(socket, data.playerName);
    return { event: "join", data: { id: id } };
  }

  /** Handle a leave message
   *
   * @returns The leave event
   */
  @SubscribeMessage("leave")
  handleLeave(@MessageBody() data: LeaveDto) {
    this.coreService.leaveClient(data.id);
    return { event: "leave", data: { id: data.id } };
  }

  /** Handle a spawn message */
  @SubscribeMessage("spawn")
  handleSpawn(@MessageBody() data: SpawnDto) {
    this.coreService.spawnPlayer(data.id);
  }

  /** Handle a move message */
  @SubscribeMessage("move")
  handlePlayerMove(@MessageBody() data: PlayerMoveDto): void {
    this.coreService.movePlayer(data.id, data.x, data.y);
  }

  /** Handle an update message */
  @SubscribeMessage("update")
  handlePlayerUpdate(@MessageBody() data: PlayerUpdateDto): void {
    this.coreService.updatePlayer(data);
  }

  /** Handle an attack message */
  @SubscribeMessage("attack")
  handleAttack(@MessageBody() data: AttackDto) {
    this.coreService.attack(data.id, data.targetId);
  }
}

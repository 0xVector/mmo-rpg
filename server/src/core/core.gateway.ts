import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from "@nestjs/websockets";
import { Inject, LoggerService, UsePipes, ValidationPipe } from "@nestjs/common";
import { WebSocket, WebSocketServer as WSServer } from "ws";
import { WINSTON_MODULE_NEST_PROVIDER } from "nest-winston";
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

/** The core WebSocket gateway
 * 
 * The core gateway handles the incoming websocket events and calls
 * the appropriate services.
*/
@WebSocketGateway({ transports: ["websocket"] })
@UsePipes(new ValidationPipe({ transform: true }))
export class CoreGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() private readonly server: WSServer;

  constructor(
    private coreService: CoreService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly logger: LoggerService
  ) {}

  async afterInit() {
    this.logger.log("CoreGateway initialized");
  }

  /** Handle a new connection */
  async handleConnection(socket: any) {
    this.logger.log("Client connected");
  }

  /** Handle a disconnect */
  async handleDisconnect() {
    this.logger.log("Client disconnected");
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

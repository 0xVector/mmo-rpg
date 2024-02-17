import { Module } from '@nestjs/common';
import { ServerService } from './server.service';

/** The server module of the game server */
@Module({
  providers: [ServerService],
  exports: [ServerService]
})
export class ServerModule {}

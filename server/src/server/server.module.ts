import { forwardRef, Module } from '@nestjs/common';
import { ServerService } from './server.service';
import { WorldModule } from 'world/world.module';

/** The server module of the game server */
@Module({
  providers: [ServerService],
  exports: [ServerService],
  imports: [forwardRef(() => WorldModule)]
})
export class ServerModule {}

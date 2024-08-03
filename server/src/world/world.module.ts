import { forwardRef, Module } from '@nestjs/common';
import { WorldService } from './world.service';
import { ServerModule } from 'server/server.module';

@Module({
  providers: [WorldService],
  exports: [WorldService],
  imports: [forwardRef(() => ServerModule)],
})
export class WorldModule {}

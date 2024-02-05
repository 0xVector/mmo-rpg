import { Module } from '@nestjs/common';
import { UpdaterService } from './updater.service';
import { ServerModule } from 'server/server.module';

@Module({
  providers: [UpdaterService],
  imports: [ServerModule]
})
export class UpdaterModule {}

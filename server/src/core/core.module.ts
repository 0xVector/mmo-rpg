import { Module } from '@nestjs/common';
import { CoreGateway } from './core.gateway';
import { CoreService } from './core.service';
import { ServerModule } from 'server/server.module';

@Module({
  providers: [CoreGateway, CoreService],
  imports: [ServerModule]
})
export class CoreModule {}

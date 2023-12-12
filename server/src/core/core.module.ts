import { Module } from '@nestjs/common';
import { CoreGateway } from './core.gateway';
import { CoreService } from './core.service';

@Module({
  providers: [CoreGateway, CoreService]
})
export class CoreModule {}

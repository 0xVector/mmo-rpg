import { Module } from '@nestjs/common';
import { ServerService } from './server.service';

@Module({
  providers: [ServerService],
  exports: [ServerService]
})
export class ServerModule {}

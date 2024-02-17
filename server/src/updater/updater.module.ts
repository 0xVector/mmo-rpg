import { Module } from '@nestjs/common';
import { UpdaterService } from './updater.service';
import { ServerModule } from 'server/server.module';

/** The updater module 
 * 
 * This module is responsible for dispatching updates to the clients based on server events
*/
@Module({
  providers: [UpdaterService],
  imports: [ServerModule]
})
export class UpdaterModule {}

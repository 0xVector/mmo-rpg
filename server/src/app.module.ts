import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CoreModule } from "./core/core.module";
import { ScheduleModule } from "@nestjs/schedule";
import { ServerModule } from "./server/server.module";
import { UpdaterModule } from "./updater/updater.module";
import { EventEmitterModule } from "@nestjs/event-emitter";

/* The root module of the application */
@Module({
  imports: [
    CoreModule,
    ServerModule,
    UpdaterModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot()
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}

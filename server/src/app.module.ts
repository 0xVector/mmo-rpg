import { Module } from "@nestjs/common";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ScheduleModule } from "@nestjs/schedule";
import { WinstonModule } from "nest-winston";
import { AppController } from "./app.controller";
import { CoreModule } from "./core/core.module";
import { ServerModule } from "./server/server.module";
import { UpdaterModule } from "./updater/updater.module";
import { WorldModule } from "./world/world.module";
import { loggerOptions } from "./logger/logger";

/** The root module of the application */
@Module({
  imports: [
    CoreModule,
    ServerModule,
    WorldModule,
    UpdaterModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    WinstonModule.forRoot(loggerOptions)
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}

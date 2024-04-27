import { Module } from "@nestjs/common";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { ScheduleModule } from "@nestjs/schedule";
import * as winston from "winston";
import { WinstonModule, utilities } from "nest-winston";
import { AppController } from "./app.controller";
import { CoreModule } from "./core/core.module";
import { ServerModule } from "./server/server.module";
import { UpdaterModule } from "./updater/updater.module";

/** The root module of the application */
@Module({
  imports: [
    CoreModule,
    ServerModule,
    UpdaterModule,
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot(),
    WinstonModule.forRoot({
      level: "info",
      transports: [
        new winston.transports.Console({
          level: "info",
          format: winston.format.combine(
            winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss" }),
            winston.format.ms(),
            utilities.format.nestLike("mmo-rpg", {
              colors: true,
              prettyPrint: true
            })
          )
        }),

        new winston.transports.File({
          level: "debug",
          filename: "events.log",
          format: winston.format.combine(
            winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss" }),
            winston.format.ms(),
            utilities.format.nestLike("mmo-rpg", {
              colors: false,
              prettyPrint: true
            })
          )
        })
      ]
    })
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}

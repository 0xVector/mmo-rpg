import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CoreModule } from "./core/core.module";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
  imports: [CoreModule, ScheduleModule.forRoot()],
  controllers: [AppController],
  providers: []
})
export class AppModule {}

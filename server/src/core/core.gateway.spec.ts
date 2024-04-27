import { EventEmitterModule } from "@nestjs/event-emitter";
import { Test, TestingModule } from "@nestjs/testing";
import { WinstonModule } from "nest-winston";
import { CoreGateway } from "./core.gateway";
import { CoreService } from "./core.service";
import { ServerService } from "../server/server.service";

describe("CoreGateway", () => {
  let gateway: CoreGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreGateway, CoreService, ServerService],
      imports: [EventEmitterModule.forRoot(), WinstonModule.forRoot({})]
    }).compile();

    gateway = module.get<CoreGateway>(CoreGateway);
  });

  it("should be defined", () => {
    expect(gateway).toBeDefined();
  });
});

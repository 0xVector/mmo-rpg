import { Test, TestingModule } from "@nestjs/testing";
import { CoreService } from "./core.service";
import { ServerModule } from "../server/server.module";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { WinstonModule } from "nest-winston";

describe("CoreService", () => {
  let service: CoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoreService],
      imports: [ServerModule, EventEmitterModule.forRoot(), WinstonModule.forRoot({})]
    }).compile();

    service = module.get<CoreService>(CoreService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

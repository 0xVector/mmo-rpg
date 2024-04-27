import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { ServerService } from './server.service';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServerService],
      imports: [EventEmitterModule.forRoot(), WinstonModule.forRoot({})]
    }).compile();

    service = module.get<ServerService>(ServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { EventEmitterModule } from '@nestjs/event-emitter';
import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';
import { UpdaterService } from './updater.service';
import { ServerService } from '../server/server.service';

describe('UpdaterService', () => {
  let service: UpdaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdaterService, ServerService],
      imports: [EventEmitterModule.forRoot(), WinstonModule.forRoot({})]
    }).compile();

    service = module.get<UpdaterService>(UpdaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

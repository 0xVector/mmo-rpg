import { Test, TestingModule } from '@nestjs/testing';
import { UpdaterService } from './updater.service';

describe('UpdaterService', () => {
  let service: UpdaterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdaterService],
    }).compile();

    service = module.get<UpdaterService>(UpdaterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

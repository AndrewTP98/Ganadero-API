import { Test, TestingModule } from '@nestjs/testing';
import { GanadoService } from './ganado.service';

describe('GanadoService', () => {
  let service: GanadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GanadoService],
    }).compile();

    service = module.get<GanadoService>(GanadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

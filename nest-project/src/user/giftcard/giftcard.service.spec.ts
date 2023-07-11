import { Test, TestingModule } from '@nestjs/testing';
import { GiftcardService } from './giftcard.service';

describe('GiftcardService', () => {
  let service: GiftcardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiftcardService],
    }).compile();

    service = module.get<GiftcardService>(GiftcardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { GiftcardController } from './giftcard.controller';
import { GiftcardService } from './giftcard.service';

describe('GiftcardController', () => {
  let controller: GiftcardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiftcardController],
      providers: [GiftcardService],
    }).compile();

    controller = module.get<GiftcardController>(GiftcardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

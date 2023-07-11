import { Module } from '@nestjs/common';
import { GiftcardService } from './giftcard.service';
import { GiftcardController } from './giftcard.controller';

@Module({
  controllers: [GiftcardController],
  providers: [GiftcardService]
})
export class GiftcardModule {}

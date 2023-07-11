import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AddressModule } from './address/address.module';
import { GiftcardModule } from './giftcard/giftcard.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [AddressModule, GiftcardModule]
})
export class UserModule {}

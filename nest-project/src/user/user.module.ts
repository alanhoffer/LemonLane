import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AddressModule } from './address/address.module';
import { GiftcardModule } from './giftcard/giftcard.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  providers: [UserService],
  imports: [ TypeOrmModule.forFeature([User]),AddressModule, GiftcardModule],
  exports: [UserService]
})
export class UserModule {}

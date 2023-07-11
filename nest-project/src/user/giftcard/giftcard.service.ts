import { Injectable } from '@nestjs/common';
import { CreateGiftcardDto } from './dto/create-giftcard.dto';
import { UpdateGiftcardDto } from './dto/update-giftcard.dto';

@Injectable()
export class GiftcardService {
  create(createGiftcardDto: CreateGiftcardDto) {
    return 'This action adds a new giftcard';
  }

  findAll() {
    return `This action returns all giftcard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giftcard`;
  }

  update(id: number, updateGiftcardDto: UpdateGiftcardDto) {
    return `This action updates a #${id} giftcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} giftcard`;
  }
}

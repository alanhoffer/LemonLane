import { PartialType } from '@nestjs/mapped-types';
import { CreateGiftcardDto } from './create-giftcard.dto';

export class UpdateGiftcardDto extends PartialType(CreateGiftcardDto) {}

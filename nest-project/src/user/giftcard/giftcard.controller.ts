import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GiftcardService } from './giftcard.service';
import { CreateGiftcardDto } from './dto/create-giftcard.dto';
import { UpdateGiftcardDto } from './dto/update-giftcard.dto';

@Controller('giftcard')
export class GiftcardController {
  constructor(private readonly giftcardService: GiftcardService) {}

  @Post()
  create(@Body() createGiftcardDto: CreateGiftcardDto) {
    return this.giftcardService.create(createGiftcardDto);
  }

  @Get()
  findAll() {
    return this.giftcardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giftcardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGiftcardDto: UpdateGiftcardDto) {
    return this.giftcardService.update(+id, updateGiftcardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giftcardService.remove(+id);
  }
}

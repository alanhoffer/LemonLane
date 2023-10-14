import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Put
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  authService: any;
  constructor(private readonly userService: UserService) { }


  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const foundedUser = this.userService.findOne(+id);

    return foundedUser;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

}

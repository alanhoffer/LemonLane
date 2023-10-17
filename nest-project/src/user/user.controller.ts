import {
  Controller,
  Get,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  authService: any;
  constructor(private readonly userService: UserService) { }


  @Get()
  async getUsers(
    @Query('page') page: number = 1,
    @Query('perPage') perPage: number = 10,
  ): Promise<{ users: User[], totalUsers: number }> {
    return this.userService.getUsers(page, perPage);
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

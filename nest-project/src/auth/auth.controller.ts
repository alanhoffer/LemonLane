import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from 'src/user/user.service';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { UserDto } from 'src/auth/dto/user.dto';
import { User } from 'src/user/entities/user.entity';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post('login')
  login(@Body() loginAuthDto: LoginAuthDto) {
    return this.authService.login(loginAuthDto);
  }


  @Post('register')
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }


}

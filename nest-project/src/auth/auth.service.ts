import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(private readonly userService: UserService) {}

  login(loginAuthDto: LoginAuthDto) {

    const user = this.userService.findByEmail(loginAuthDto.email);

    if(user && user.password == loginAuthDto.password){
      return user.id;
    }

    throw new BadRequestException('User not found');
  }


}

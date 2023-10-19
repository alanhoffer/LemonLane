import { BadRequestException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/auth/dto/user.dto';
import { Role } from './enum/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register({ name, lname, email, password }: UserDto) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      throw new BadRequestException('User already exists.');
    }

    return await this.userService.create({
      name,
      lname,
      email,
      password: await bcrypt.hash(password, 10),
    });
  }

  async login({ email, password }: LoginAuthDto) {
    const user = await this.userService.findByEmailWithPassword(email);

    if (!user) {
      throw new UnauthorizedException('Wrong email.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!password) {
      throw new UnauthorizedException('Wrong Password.');
    }

    const payload = { email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      access_token,
      email,
    };
  }
}


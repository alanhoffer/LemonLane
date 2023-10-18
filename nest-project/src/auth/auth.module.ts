import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/secret';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: {expiresIn: "1d"}
  }), UserModule]
})
export class AuthModule {}

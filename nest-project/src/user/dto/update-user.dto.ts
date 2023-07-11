import { IsEmail, Length } from "@nestjs/class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
            
    @IsEmail()
    email?:string;

    @Length(1, 45)
    name?:string;
    
    @Length(1, 45)
    lname?:string;

    @Length(1, 255)
    password?:string;
}


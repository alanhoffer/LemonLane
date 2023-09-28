import { IsEmail, Length } from "class-validator";

export class UserDto {
        
        @IsEmail()
        email:string;

        @Length(1, 45)
        name:string;

        @Length(8, 255)
        password:string;
}

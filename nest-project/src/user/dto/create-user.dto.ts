import { IsEmail, Length } from "class-validator";

export class CreateUserDto {
        
        @IsEmail()
        email:string;

        @Length(1, 45)
        name:string;
        
        @Length(1, 45)
        lname:string;

        @Length(1, 255)
        password:string;
}

import { IsEmail, Length } from "class-validator";
import { Role } from "../enum/role.enum";

export class UserDto {
        
        @IsEmail()
        email:string;

        @Length(1, 45)
        name:string;

        @Length(1, 45)
        lname:string;

        @Length(8, 255)
        password:string;

}

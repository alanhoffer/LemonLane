import { IsEmail, Length } from "class-validator";
import { Role } from "../enum/role.enum";

export class UserDto {
        
        @IsEmail()
        email:string;

        roles: Role[]

        @Length(1, 45)
        name:string;

        @Length(8, 255)
        password:string;
}

import { MaxLength, Length, IsString } from "class-validator";

export class CreateCategoryDto {

    

    @IsString()
    @Length(4, 30, { message: 'El nombre de la categoria tiene que tener entre 4 a 30 caracteres.' })
    name: string;
}

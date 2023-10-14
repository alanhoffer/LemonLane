import { Length, IsString } from "class-validator";

export class CreateCollectionDto {


    @IsString()
    @Length(4, 30, { message: 'El nombre de la coleccion tiene que tener entre 4 a 30 caracteres.' })
    name: string;

    @IsString()
    @Length(4, 255, { message: 'La descripcion tiene que tener entre 4 a 200 caracteres.' })
    description: string;
    
}

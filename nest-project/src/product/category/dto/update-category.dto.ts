import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { IsString, Length } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    @IsString()
    @Length(4, 30, { message: 'El nombre de la categoria tiene que tener entre 4 a 30 caracteres.' })
    name: string;
}

import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryValidationPipe implements PipeTransform {
  transform(value: Category, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('La categoría no puede estar vacía.');
    }

    if (typeof value.name !== 'string' || value.name.length < 3 || value.name.length > 100) {
      throw new BadRequestException('El nombre de la categoría debe tener entre 3 y 100 caracteres.');
    }

    return value;
  }
}
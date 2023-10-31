import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { Collection } from 'typeorm';
import { Category } from '../category/entities/category.entity';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    name?: string;
    price?: number;
    description?: string;
    collection?: Collection;
    category?: Category;
}

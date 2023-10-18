import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    name?: string;
    price?: number;
    description?: string;
    collectionId?: number;
    categoryId?: number;
}

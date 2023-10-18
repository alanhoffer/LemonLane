import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { Collection } from './collection/entities/collection.entity';
import { Stock } from './stock/entities/stock.entity';
import { Product } from './entities/product.entity';
import { CollectionService } from './collection/collection.service';
import { CategoryService } from './category/category.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, CollectionService, CategoryService],
  imports:[TypeOrmModule.forFeature([Product, Stock, Category, Collection])]
})
export class ProductModule {}

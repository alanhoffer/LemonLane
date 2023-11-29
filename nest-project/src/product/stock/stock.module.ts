import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { Stock } from './entities/stock.entity';
import { Product } from '../entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from '../product.service';
import { CollectionService } from '../collection/collection.service';
import { CategoryService } from '../category/category.service';
import { Collection } from '../collection/entities/collection.entity';
import { Category } from '../category/entities/category.entity';

@Module({
  controllers: [StockController],
  providers: [StockService, ProductService, CollectionService, CategoryService],
  imports:[TypeOrmModule.forFeature([Product, Stock, Collection, Category])]
})
export class StockModule {}

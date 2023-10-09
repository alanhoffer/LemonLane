import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Category } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports:[TypeOrmModule.forFeature([Product, Category])]
})
export class CategoryModule {}

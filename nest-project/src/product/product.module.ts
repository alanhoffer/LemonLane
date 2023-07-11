import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CollectionModule } from './collection/collection.module';
import { CategoryModule } from './category/category.module';
import { StockModule } from './stock/stock.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [CollectionModule, CategoryModule, StockModule]
})
export class ProductModule {}

import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { Stock } from './entities/stock.entity';
import { Product } from '../entities/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StockController],
  providers: [StockService],
  imports:[TypeOrmModule.forFeature([Product, Stock])]
})
export class StockModule {}

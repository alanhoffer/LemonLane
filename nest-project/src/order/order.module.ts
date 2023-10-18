import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderItemModule } from './order-item/order-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/product/entities/product.entity';
import { Order } from './entities/order.entity';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [OrderItemModule,
  TypeOrmModule.forFeature([
    Product,
    Order
  ])]
})
export class OrderModule {}

import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderItemModule } from './order-item/order-item.module';

@Module({
  controllers: [OrderController],
  providers: [OrderService],
  imports: [OrderItemModule]
})
export class OrderModule {}

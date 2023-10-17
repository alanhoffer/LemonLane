import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderItemModule } from './order-item/order-item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Module({
  controllers: [OrderController],
  providers: [OrderService, UserService],
  imports: [OrderItemModule, TypeOrmModule.forFeature([Order, User])]
})
export class OrderModule {}

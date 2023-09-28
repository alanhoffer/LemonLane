import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { Address } from './user/address/entities/address.entity';
import { Giftcard } from './user/giftcard/entities/giftcard.entity';
import { Category } from './product/category/entities/category.entity';
import { Collection } from './product/collection/entities/collection.entity';
import { Stock } from './product/stock/entities/stock.entity';
import { Order } from './order/entities/order.entity';
import { OrderItem } from './order/order-item/entities/order-item.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ep-spring-breeze-88179053.us-east-2.aws.neon.tech',
    port: 5432,
    password: '8nXWSApr5skU',
    username: 'fl0user',
    entities: [User, Product, Address, Giftcard, Category, Collection, Stock, Order, OrderItem],
    database: 'lemon-lane',
    synchronize: true,
    ssl: true, 
  }),
    UserModule,
    ProductModule,
    OrderModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

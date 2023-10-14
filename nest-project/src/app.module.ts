import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { CollectionModule } from './product/collection/collection.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ep-spring-breeze-88179053.us-east-2.aws.neon.tech',
    port: 5432,
    password: '8nXWSApr5skU',
    username: 'fl0user',
    entities: ["dist/**/**.entity{.ts,.js}"],
    database: 'lemon-lane',
    synchronize: true,
    ssl: true, 
  }),
    UserModule,
    ProductModule,
    OrderModule,
    AuthModule,
    CollectionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

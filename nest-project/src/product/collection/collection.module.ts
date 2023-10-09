import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../entities/product.entity';
import { Collection } from './entities/collection.entity';

@Module({
  controllers: [CollectionController],
  providers: [CollectionService],
  imports:[TypeOrmModule.forFeature([Product, Collection])]
})
export class CollectionModule {}

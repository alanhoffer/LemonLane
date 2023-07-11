import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';

@Injectable()
export class CollectionService {

  private collections: Collection[] = [
    {
      id: 1,
      name: "Winter Collection",
      image: "winter.jpg",
      description: "Stay warm and stylish this winter with our latest collection."
    },
    {
      id: 2,
      name: "Spring Collection",
      image: "spring.jpg",
      description: "Welcome the season of renewal with our vibrant and trendy spring collection."
    },
    {
      id: 3,
      name: "Summer Collection",
      image: "summer.jpg",
      description: "Beat the heat with our cool and comfortable summer collection."
    },
    {
      id: 4,
      name: "Autumn Collection",
      image: "autumn.jpg",
      description: "Embrace the colors of autumn with our cozy and fashionable collection."
    },
    {
      id: 5,
      name: "Athleisure Collection",
      image: "athleisure.jpg",
      description: "Combine style and comfort with our athleisure collection for an active lifestyle."
    }
  ];



  create(createCollectionDto: CreateCollectionDto) {
    return 'This action adds a new collection';
  }

  findAll() {
    return this.collections;
  }

  findOne(id: number) {
    const collection = this.collections.find(collection => collection.id == id);
    return collection;
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  remove(id: number) {
    return `This action removes a #${id} collection`;
  }
}

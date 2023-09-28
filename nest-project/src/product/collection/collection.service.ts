import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CollectionService {

  constructor(@InjectRepository(Collection) private collectionRepository: Repository<Collection>) {

  }

  async create(createCollectionDto: CreateCollectionDto) {
    const collection = await this.collectionRepository.findOne({ where: { name: createCollectionDto.name } })
    if (collection) {
      return 
    }
    try {
      const newCollection = this.collectionRepository.create(createCollectionDto)
      return this.collectionRepository.save(newCollection)
    }
    catch (error) {
      return error
    }
  }

  findAll() {
    return this.collectionRepository.find();
  }

  async findOne(id: number) {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } })

    if (!foundedCollection) {
      return;
    }

    return foundedCollection
  }

  update(id: number, updateCollectionDto: UpdateCollectionDto) {
    return `This action updates a #${id} collection`;
  }

  async remove(id: number) {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } })

    if (!foundedCollection) {
      return ;
    }

    return this.collectionRepository.delete({ id })
  }
}

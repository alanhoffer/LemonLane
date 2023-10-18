import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs'
import * as path from 'path'


@Injectable()
export class CollectionService {

  constructor(@InjectRepository(Collection) private collectionRepository: Repository<Collection>) {

  }

  async create(createCollectionDto: CreateCollectionDto) {
    const collection = await this.collectionRepository.findOne({ where: { name: createCollectionDto.name } });

    if (collection) {
      return "ya existe"
    }

    try {
      const newCollection = await this.collectionRepository.save(new Collection(createCollectionDto.name, createCollectionDto.description));

      const folder = `${newCollection.id}`;
      const path = './public/collection';
      const url = path + '/' + folder;

      fs.mkdirSync(url, { recursive: true });



    }
    catch (error) {
      return "error al crear.";
    }
  }


  findAll() {
    return this.collectionRepository.find();
  }

  async findOne(id: number) {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } })

    if (!foundedCollection) {
      return new HttpException('Error no se encontro la collecion', HttpStatus.NOT_FOUND);
    }

    const path = `./public/collection/${id}/portada.jpg`;

    const imagen = await fs.readFileSync(path)

    return { imagen: imagen, datos: foundedCollection }
  }

  async update(id: number, updateCollectionDto: UpdateCollectionDto): Promise<Collection | HttpException> {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } });

    if (!foundedCollection) {
      return new HttpException('Error no se encontro la collecion', HttpStatus.NOT_FOUND);
    }

    if (updateCollectionDto.name) {
      foundedCollection.name = updateCollectionDto.name;
    }
    if (updateCollectionDto.description) {
      foundedCollection.description = updateCollectionDto.description;
    }

    await this.collectionRepository.save(foundedCollection);

    return foundedCollection;
  }

  async remove(id: number) {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } })

    if (!foundedCollection) {
      return new HttpException('Error no se encontro la collecion', HttpStatus.NOT_FOUND);
    }

    return this.collectionRepository.delete({ id })
  }


  async loadImage(id, file) {

    try {

      const path = `./public/collection/${id}/portada.jpg`;

      await fs.writeFileSync(path, file.buffer)

    }
    catch (error) {
      return error
    }

  }
}

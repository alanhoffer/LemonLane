import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { Collection } from './entities/collection.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs'


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


  async findAll() {
    try {
      const collections = await this.collectionRepository.find();

      const result = [];

      for (const collection of collections) {
        const path = `./public/collection/${collection.id}/portada.jpg`;

        try {
          const imagen = await fs.readFileSync(path);
          result.push({ imagen, ...collection });
        } catch (error) {
          // Handle error when reading image
          result.push({ imagen: null, ...collection });
        }
      }

      return result;
    } catch (error) {
      throw new HttpException('Error al obtener las colecciones', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }




  async findOne(id: number) {
    const foundedCollection = await this.collectionRepository.findOne({ where: { id } })

    if (!foundedCollection) {
      throw new NotFoundException('La colección especificada no existe');
    }

    const path = `./public/collection/${id}/portada.jpg`;

    const imagen = await fs.readFileSync(path)

    return { imagen: imagen, ...foundedCollection }
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

    const deletedCollection = this.collectionRepository.delete({ id })

    if (deletedCollection) {
      const path = `./public/collection/${foundedCollection.id}`;
      fs.rmSync(path, { recursive: true, force: true });
      return deletedCollection
    }

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

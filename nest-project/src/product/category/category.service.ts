import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {

  }


  async create(createCategoryDto: CreateCategoryDto) {

    try {
      const newCategory = this.categoryRepository.create(createCategoryDto)
      return this.categoryRepository.save(newCategory)
    }
    catch (error) {
      return error
    }

  }

  findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    try {
      const foundedCategory = await this.categoryRepository.findOne({ where: { id } })

      if (!foundedCategory) {
        return new HttpException('Error en la busqueda de la categoria' + id, HttpStatus.NOT_FOUND);
      }

      // else will return the user founded
      return foundedCategory
    }
    catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `${error}` },
        HttpStatus.NOT_FOUND)
    }
  }


  async findByName(name: string) {
  const foundedCategory = this.categoryRepository.findOne({ where: { name } });

  if (!foundedCategory) {
    return undefined;
  }

  return foundedCategory;
}

update(id: number, updateCategoryDto: UpdateCategoryDto) {
  return `This action updates a #${id} category`;
}

  async remove(id: number) {
  const foundCategory = await this.categoryRepository.findOne({ where: { id } })

  if (!foundCategory) {
    return undefined;
  }

  return this.categoryRepository.delete({ id })
}
}

import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryDTO } from './dto/category.dto';

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

  async findAll() {
    const categories: Category[] = await this.categoryRepository.find();

    const categoryResponses: CategoryDTO[] = categories.map(category => {
      return {
        id: category.id,
        name: category.name,
      };
    });
    return categoryResponses
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

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne({ where: { id } });

    if (!category) {
      throw new NotFoundException(`La categoría con el ID ${id} no se encontró.`);
    }

    // Actualiza el campo 'name' solo si se proporciona en el DTO de actualización
    if (updateCategoryDto.name) {
      category.name = updateCategoryDto.name;
    }

    // Guarda la categoría actualizada en la base de datos
    await this.categoryRepository.save(category);

    return category;
  }

  async remove(id: number) {
    const foundCategory = await this.categoryRepository.findOne({ where: { id } })

    if (!foundCategory) {
      return undefined;
    }

    return this.categoryRepository.delete({ id })
  }
}

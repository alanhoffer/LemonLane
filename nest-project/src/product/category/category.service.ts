import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  private categories: Category[] = [
    { id: 1, name: "TRENDING" },
    { id: 2, name: "CAPS" },
    { id: 3, name: "JACKETS" },
    { id: 4, name: "SWEATSHIRTS" },
    { id: 5, name: "T-SHIRTS" },
    { id: 6, name: "PANTS" },
    { id: 7, name: "SOCKS" }
  ];
  

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return this.categories
  }

  findOne(id: number) {
    const category = this.categories.find(category => category.id == id);
    return category;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { validate } from 'class-validator';

@Injectable()
export class ProductService {

  private productList: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "Description for Product 1",
      collectionId: 1,
      categoryId: 2
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description: "Description for Product 2",
      collectionId: 2,
      categoryId: 3
    },
    {
      id: 3,
      name: "Product 3",
      price: 14.99,
      description: "Description for Product 3",
      collectionId: 1,
      categoryId: 4
    },
  ];


  async create(createProductDto: CreateProductDto) {

    const newProduct: Product = {
      id: this.productList[this.productList.length - 1].id + 1,
      name: createProductDto.name,
      price: createProductDto.price,
      description: createProductDto.description,
      collectionId: createProductDto.collectionId,
      categoryId: createProductDto.categoryId
    };

    await this.validateProduct(newProduct);

    this.productList.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.productList;
  }

  findOne(id: number) {
    const product = this.productList.find(product => product.id == id);
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const userIndex = this.productList.findIndex((user) => user.id === id);

    if (!userIndex && userIndex != 0) {
      throw new BadRequestException('Product not found');
    }

    let updatedProduct: Product = { ...this.productList[userIndex], ...updateProductDto };

    this.productList[userIndex] = updatedProduct

    return updatedProduct;
  }

  remove(id: number) {

    const productIndex = this.productList.findIndex((user) => user.id === id);

    if (!productIndex && productIndex != 0) {
      throw new BadRequestException('Product not found');
    }

    this.productList.splice(productIndex, 1);

    return this.productList;
  }

  private async validateProduct(product: Product): Promise<void> {
    const errors = await validate(product);

    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
  }
}

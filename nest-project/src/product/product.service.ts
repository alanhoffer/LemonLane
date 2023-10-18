import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { validate } from 'class-validator';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {

  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) { }


  async create(createProductDto: CreateProductDto) {

  }

  async findAll() {

    const productList = this.productRepository.find()

    return productList;

  }

  findOne(id: number) {

    const product = this.productRepository.find({ where: { id } });

    return product;

  }


  async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });

    if (!product) {
      throw new HttpException(`El producto con el ID ${id} no se encontró.`, HttpStatus.NOT_FOUND);
    }

    if (updateProductDto.name) {
      product.name = updateProductDto.name;
    }
    if (updateProductDto.price) {
      product.price = updateProductDto.price;
    }
    if (updateProductDto.description) {
      product.description = updateProductDto.description;
    }
    if (updateProductDto.collectionId) {
      product.collectionId = updateProductDto.collectionId;
    }
    if (updateProductDto.categoryId) {
      product.categoryId = updateProductDto.categoryId;
    }

    await this.productRepository.save(product);

    return product;
  }

  async remove(id: number) {

    const foundedProduct = await this.productRepository.findOne({ where: { id } })

    if (!foundedProduct) {
      return new HttpException('Error no se encontro el producto', HttpStatus.NOT_FOUND);
    }

    return this.productRepository.delete({ id })
  }

}

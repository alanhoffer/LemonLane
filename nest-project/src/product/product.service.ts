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
    const product = this.productRepository.find({where : {id}});
    return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {

  }

  async remove(id: number) {

    const foundedProduct = await this.productRepository.findOne({ where: { id } })

    if (!foundedProduct) {
      return new HttpException('Error no se encontro el producto', HttpStatus.NOT_FOUND);
    }

    return this.productRepository.delete({ id })
  }

}

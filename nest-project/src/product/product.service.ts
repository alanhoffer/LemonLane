import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from './category/category.service';
import { CollectionService } from './collection/collection.service';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    private readonly collectionService: CollectionService,
    private readonly categoryService: CategoryService,) { }



  async create(createProductDto: CreateProductDto): Promise<Product> {
    const collection = await this.collectionService.findOne(createProductDto.collectionId);
    if (!collection) {
      throw new NotFoundException('La colección especificada no existe');
    }

    const category = await this.categoryService.findOne(createProductDto.categoryId);
    if (!category) {
      throw new NotFoundException('La categoría especificada no existe');
    }

    // Crear el producto
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
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

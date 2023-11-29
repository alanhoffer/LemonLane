import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryService } from './category/category.service';
import { CollectionService } from './collection/collection.service';

import * as fs from 'fs'
import * as path from 'path';

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

    try {
      // Create the product entity
      const newProduct = this.productRepository.create({
        name: createProductDto.name,
        price: createProductDto.price,
        description: createProductDto.description,
        collection: collection,
        category: category,
      });

      const folder = `${newProduct.id}`;
      const path = './public/product';
      const url = path + '/' + folder;
      fs.mkdirSync(url, { recursive: true });

      // Save the product to the database
      return await this.productRepository.save(newProduct);
    } catch (error) {
      throw new Error('Error creating the product' + error);
    }
  }
  
  async findAll() {
    try {
      const products = await this.productRepository.find();

      const result = [];


      // ...

      for (const product of products) {
        const dirPath = `./public/product/${product.id}`;

        try {
          // Lee la lista de archivos en el directorio
          const images = fs.readdirSync(dirPath);

          // Encuentra la primera imagen (si hay alguna)
          const firstImage = images.find((imageName) => imageName.endsWith('.jpg'));

          // Construye la ruta completa de la primera imagen
          const imagePath = firstImage ? path.join(dirPath, firstImage) : null;

          // Lee el contenido de la primera imagen
          const imagen = imagePath ? fs.readFileSync(imagePath) : null;

          result.push({ imagen, ...product });
        } catch (error) {
          // Handle error when reading images
          result.push({ imagen: null, ...product });
        }
      }


      return result;
    } catch (error) {
      throw new HttpException('Error al obtener los productos', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async findOne(id: number) {
    const foundedProduct = await this.productRepository.findOne({
      where: { id },
      relations: ['stocks', 'category', 'collection', 'orderItems'],
    });

    if (!foundedProduct) {
      throw new HttpException('Error: No se encontró el producto', HttpStatus.NOT_FOUND);
    }

    const imageDir = `./public/product/${id}`;
    let images: string[] = [];


    try {
      // Lee la lista de archivos en el directorio
      images = fs.readdirSync(imageDir);
    } catch (error) {
      // Handle error when reading the directory
      console.error('Error al leer el directorio de imágenes:', error);
    }

    const imagePaths = images.map((imageName) => `${imageDir}/${imageName}`);

    // Lee el contenido de cada imagen
    const imageData = imagePaths.map((imagePath) => {
      try {
        const imageBuffer = fs.readFileSync(imagePath);
        return { name: path.basename(imagePath), data: imageBuffer };
      } catch (error) {
        // Handle error when reading image
        console.error('Error al leer la imagen:', error);
        return null;
      }
    });

    // Combina los datos del producto con la información de las imágenes
    const result = { images: imageData, productData: foundedProduct };

    return result;
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
    if (updateProductDto.categoryId) {
      product.category = updateProductDto.category;
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

  async uploadImage(id, file) {

    // file[]
    try {

      const path = `./public/product/${id}/portada.jpg`;

      await fs.writeFileSync(path, file.buffer)

    }
    catch (error) {
      return error
    }

  }

  async uploadImages(id: number, files: Express.Multer.File[]) {
    try {
      const imageDir = `./public/product/${id}`;
      fs.mkdirSync(imageDir, { recursive: true });

      const uploadedImages: string[] = [];

      files.forEach((file, index) => {
        const filename = `image_${index + 1}.jpg`;
        const filePath = `${imageDir}/${filename}`;

        fs.writeFileSync(filePath, file.buffer);
        uploadedImages.push(filename);
      });

      return uploadedImages;
    } catch (error) {
      console.error('Error al cargar las imágenes:', error);
      throw error;
    }
  }

}



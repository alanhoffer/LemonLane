import { Injectable, BadRequestException, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {

  constructor(@InjectRepository(Stock) private stockRepository: Repository<Stock>) { }

  async create(createStockDto: CreateStockDto) {
    try {
      const newstock = this.stockRepository.create(createStockDto)
      return this.stockRepository.save(newstock)
    }
    catch (error) {
      return error
    }
  }

  findAll() {
    return this.stockRepository.find();
  }

  async findOne(id: number) {
    const foundedStock = await this.stockRepository.findOne({ where: { id } })

    if (!foundedStock) {
      return new HttpException('Error no se encontro el stock', HttpStatus.NOT_FOUND);
    }

    return foundedStock
  }

  async update(id: number, updateStockDto: UpdateStockDto): Promise<Stock> {
    const stock = await this.stockRepository.findOne({ where: { id } });

    if (!stock) {
      throw new NotFoundException(`El registro de stock con el ID ${id} no se encontró.`);
    }

    if (updateStockDto.color) {
      stock.color = updateStockDto.color;
    }
    if (updateStockDto.size) {
      stock.size = updateStockDto.size;
    }
    if (updateStockDto.quantity) {
      stock.quantity = updateStockDto.quantity;
    }

    await this.stockRepository.save(stock);

    return stock;
  }

  async remove(id: number) {
    const foundedStock = await this.stockRepository.findOne({ where: { id } })

    if (!foundedStock) {
      return new HttpException('Error no se encontro el stock', HttpStatus.NOT_FOUND);
    }

    return this.stockRepository.delete({ id })
  }
}

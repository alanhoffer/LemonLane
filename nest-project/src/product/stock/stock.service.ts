import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StockService {

  private stockList: Stock[] = [
    {
      id: 1,
      color: "Red",
      size: "M",
      quantity: 10,
      image: ["red_cloth1.jpg", "red_cloth2.jpg"],
      productId: 1
    },
    {
      id: 2,
      color: "Blue",
      size: "L",
      quantity: 5,
      image: ["blue_cloth1.jpg", "blue_cloth2.jpg"],
      productId: 2
    },
    {
      id: 3,
      color: "Black",
      size: "S",
      quantity: 8,
      image: ["black_cloth1.jpg", "black_cloth2.jpg"],
      productId: 1
    },
  ];
  
  create(createStockDto: CreateStockDto) {
    return 'This action adds a new stock';
  }

  findAll() {
    return this.stockList;
  }

  findOne(productId: number) {
    const stock = this.stockList.find(stock => stock.productId == productId);
    return stock;
  }

  update(id: number, updateStockDto: UpdateStockDto) {
    return `This action updates a #${id} stock`;
  }

  remove(id: number) {
    return `This action removes a #${id} stock`;
  }
}

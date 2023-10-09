import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class OrderService {

  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>) {
  }


  async create(createOrderDto: CreateOrderDto) {

    try {
      const newOrder: Order = this.orderRepository.create(createOrderDto);
      return this.orderRepository.save(newOrder);
    }
    catch (error) {
      return error;
    }

  }

  findAll() {
    return this.orderRepository.find();
  }

  async findOne(id: number) {
    try {
      const foundOrder = await this.orderRepository.findOne({ where: { id } });

      if (!foundOrder) {
        return new HttpException('Error en la busqueda de la orden' + id, HttpStatus.NOT_FOUND);
      }

      // else will return the user founded
      return foundOrder;
    }
    catch (error) {
      throw new HttpException(
        { status: HttpStatus.NOT_FOUND, error: `${error}` },
        HttpStatus.NOT_FOUND);
    }
  }


  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    const foundOrder = await this.orderRepository.findOne({ where: { id } });

    if (!foundOrder) {
      return new HttpException('Error en la busqueda de la orden' + id, HttpStatus.NOT_FOUND);
    }

    return this.orderRepository.delete({ id });
  }
}

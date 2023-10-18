import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';


@Injectable()
export class OrderService {

  constructor(@InjectRepository(Order) private orderRepository: Repository<Order>,
    private readonly userService: UserService) {
  }


  async create(createOrderDto: CreateOrderDto) {

    const userFounded = await this.userService.findOne(createOrderDto.user);

    if (!userFounded) {
      return new HttpException('Error en la busqueda del usuario ' + createOrderDto.user, HttpStatus.NOT_FOUND);
    }
    try {
      return this.orderRepository.save(new Order(createOrderDto.status, userFounded, createOrderDto.giftcard));
    }
    catch (error) {
      return error;
    }

  }


  async findAll(page: number, perPage: number): Promise<{ orders: Order[], totalOrders: number }> {
    const skip = (page - 1) * perPage;
    const [orders, totalOrders] = await this.orderRepository.findAndCount({
      skip,
      take: perPage,
    });

    return {orders, totalOrders}
  }
  async findOne(id: number) {
    try {
      const foundOrder = await this.orderRepository.findOne({
        where: { id }
      });

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

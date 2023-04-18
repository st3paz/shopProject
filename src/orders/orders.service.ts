import { Injectable } from '@nestjs/common';
import { Orders } from './orders.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrdersDto } from './create-order.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}

  findAll(): Promise<Orders[]> {
    return this.ordersRepository.find();
  }

  findOne(id: number): Promise<Orders | null> {
    return this.ordersRepository.findOneBy({ id });
  }

  create(createOrderDto: CreateOrdersDto) {
    const orders = new Orders();
    orders.orderDate = createOrderDto.orderDate;
    orders.userId = createOrderDto.userId;
    orders.productId = createOrderDto.productId;
    return this.ordersRepository.save(orders);
  }

  async remove(id: number) {
    await this.ordersRepository.delete(id);
  }
}

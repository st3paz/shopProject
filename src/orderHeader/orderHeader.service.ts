import { Injectable } from '@nestjs/common';
import { OrderHeader } from './orderHeader.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderHeaderDto } from './create-orderHeader.dto';

@Injectable()
export class OrderHeaderService {
  constructor(
    @InjectRepository(OrderHeader)
    private orderHeaderRepository: Repository<OrderHeader>,
  ) {}

  findAll(): Promise<OrderHeader[]> {
    return this.orderHeaderRepository.find();
  }

  findOne(order_header_id: number): Promise<OrderHeader | null> {
    return this.orderHeaderRepository.findOneBy({ order_header_id });
  }

  create(createOrderHeaderDto: CreateOrderHeaderDto) {
    const orderHeader = new OrderHeader();
    orderHeader.user_id = createOrderHeaderDto.user_id;
    return this.orderHeaderRepository.save(orderHeader);
  }

  async remove(order_header_id: number) {
    await this.orderHeaderRepository.delete(order_header_id);
  }
}

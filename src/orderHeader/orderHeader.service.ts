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

  findOne(orderHeaderId: number): Promise<OrderHeader | null> {
    return this.orderHeaderRepository.findOneBy({ orderHeaderId });
  }

  create(createOrderHeaderDto: CreateOrderHeaderDto) {
    const orderHeader = new OrderHeader();
    orderHeader.orderDate = createOrderHeaderDto.orderDate;
    return this.orderHeaderRepository.save(orderHeader);
  }

  async remove(orderHeaderId: number) {
    await this.orderHeaderRepository.delete(orderHeaderId);
  }
}

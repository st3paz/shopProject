import { Injectable } from '@nestjs/common';
import { OrderDetail } from './orderDetail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDetailDto } from './create-orderDetail.dto';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private orderDetailRepository: Repository<OrderDetail>,
  ) {}

  findAll(): Promise<OrderDetail[]> {
    return this.orderDetailRepository.find();
  }

  findOne(orderDetailId: number): Promise<OrderDetail | null> {
    return this.orderDetailRepository.findOneBy({ orderDetailId });
  }

  create(createOrderDetailDto: CreateOrderDetailDto) {
    const orderDetail = new OrderDetail();
    orderDetail.price = createOrderDetailDto.price;
    orderDetail.count = createOrderDetailDto.count;
    return this.orderDetailRepository.save(orderDetail);
  }

  async remove(orderDetailId: number) {
    await this.orderDetailRepository.delete(orderDetailId);
  }
}

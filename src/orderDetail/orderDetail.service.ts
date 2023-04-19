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

  findOne(order_detail_id: number): Promise<OrderDetail | null> {
    return this.orderDetailRepository.findOneBy({ order_detail_id });
  }

  create(createOrderDetailDto: CreateOrderDetailDto) {
    const orderDetail = new OrderDetail();
    orderDetail.price = createOrderDetailDto.price;
    orderDetail.count = createOrderDetailDto.count;
    orderDetail.product_id = createOrderDetailDto.product_id;
    orderDetail.order_header_id = createOrderDetailDto.order_header_id;
    return this.orderDetailRepository.save(orderDetail);
  }

  async remove(order_detail_id: number) {
    await this.orderDetailRepository.delete(order_detail_id);
  }
}

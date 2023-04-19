import { OrderDetailService } from './orderDetail.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrderDetailDto } from './create-orderDetail.dto';
import { OrderDetail } from './orderDetail.entity';

@Controller('orderDetail')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Post()
  create(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.create(createOrderDetailDto);
  }

  @Get()
  findAll() {
    return this.orderDetailService.findAll();
  }

  @Get('order_detail_id:id')
  findOne(
    @Param('order_detail_id') order_detail_id: number,
  ): Promise<OrderDetail> {
    return this.orderDetailService.findOne(order_detail_id);
  }

  @Delete(':order_detail_id:id')
  remove(@Param('order_detail_id') order_detail_id: number): Promise<void> {
    return this.orderDetailService.remove(order_detail_id);
  }
}

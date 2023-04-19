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

  @Get('orderDetailId:id')
  findOne(@Param('orderDetailId') orderDetailId: number): Promise<OrderDetail> {
    return this.orderDetailService.findOne(orderDetailId);
  }

  @Delete(':orderDetailId:id')
  remove(@Param('orderDetailId') orderDetailId: number): Promise<void> {
    return this.orderDetailService.remove(orderDetailId);
  }
}

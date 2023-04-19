import { OrderHeaderService } from './orderHeader.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrderHeaderDto } from './create-orderHeader.dto';
import { OrderHeader } from './orderHeader.entity';

@Controller('orderHeader')
export class OrderHeaderController {
  constructor(private readonly orderHeaderService: OrderHeaderService) {}

  @Post()
  create(@Body() createOrderHeaderDto: CreateOrderHeaderDto) {
    return this.orderHeaderService.create(createOrderHeaderDto);
  }

  @Get()
  findAll() {
    return this.orderHeaderService.findAll();
  }

  @Get('orderHeaderId:id')
  findOne(@Param('orderHeaderId') orderHeaderId: number): Promise<OrderHeader> {
    return this.orderHeaderService.findOne(orderHeaderId);
  }

  @Delete(':orderHeaderId:id')
  remove(@Param('orderHeaderId') orderHeaderId: number): Promise<void> {
    return this.orderHeaderService.remove(orderHeaderId);
  }
}

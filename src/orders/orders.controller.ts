import { OrdersService } from './orders.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOrdersDto } from './create-order.dto';
import { Orders } from './orders.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrdersDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Orders> {
    return this.ordersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.ordersService.remove(id);
  }
}

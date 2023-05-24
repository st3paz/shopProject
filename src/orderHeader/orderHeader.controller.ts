import { OrderHeaderService } from './orderHeader.service';
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderHeaderDto } from './create-orderHeader.dto';
import { OrderHeader } from './orderHeader.entity';

@Controller('orderHeader')
export class OrderHeaderController {
  constructor(private readonly orderHeaderService: OrderHeaderService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createOrderHeaderDto: CreateOrderHeaderDto) {
    return this.orderHeaderService.create(createOrderHeaderDto);
  }

  @Get()
  findAll() {
    return this.orderHeaderService.findAll();
  }

  @Get(':order_header_id')
  findOne(
    @Param('order_header_id') order_header_id: number,
  ): Promise<OrderHeader> {
    return this.orderHeaderService.findOne(order_header_id);
  }

  @Delete(':order_header_id')
  remove(@Param('order_header_id') order_header_id: number): Promise<void> {
    return this.orderHeaderService.remove(order_header_id);
  }
}

import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('product_id:id')
  findOne(@Param('product_id') product_id: number): Promise<Product> {
    return this.productsService.findOne(product_id);
  }

  @Delete(':product_id:id')
  remove(@Param('product_id') product_id: number): Promise<void> {
    return this.productsService.remove(product_id);
  }
}

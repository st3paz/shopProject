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

  @Get(':productId')
  findOne(@Param('productId') productId: number): Promise<Product> {
    return this.productsService.findOne(productId);
  }

  @Delete(':productId')
  remove(@Param('productId') productId: number): Promise<void> {
    return this.productsService.remove(productId);
  }
}

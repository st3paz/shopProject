import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './create-product.dto';
import { Product } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':product_id')
  findOne(@Param('product_id') product_id: number): Promise<Product> {
    return this.productsService.findOne(product_id);
  }

  @Delete(':product_id')
  remove(@Param('product_id') product_id: number): Promise<void> {
    return this.productsService.remove(product_id);
  }
}

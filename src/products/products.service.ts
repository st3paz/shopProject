import { Injectable } from '@nestjs/common';
import { Product } from './products.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(product_id: number): Promise<Product | null> {
    return this.productsRepository.findOneBy({ product_id });
  }

  create(createUserDto: CreateProductDto) {
    const product = new Product();
    product.name = createUserDto.name;
    product.category = createUserDto.category;
    product.size = createUserDto.size;
    product.condition = createUserDto.condition;
    product.count = createUserDto.count;
    product.price = createUserDto.price;
    return this.productsRepository.save(product);
  }

  async remove(product_id: number) {
    await this.productsRepository.delete(product_id);
  }
}

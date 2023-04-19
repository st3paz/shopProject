import { Module } from '@nestjs/common';
import { OrderHeaderController } from './orderHeader.controller';
import { OrderHeader } from './orderHeader.entity';
import { OrderHeaderService } from './orderHeader.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OrderHeaderController],
  providers: [OrderHeaderService],
  imports: [TypeOrmModule.forFeature([OrderHeader])],
  exports: [TypeOrmModule],
})
export class OrderHeaderModule {}

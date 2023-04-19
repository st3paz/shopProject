import { Module } from '@nestjs/common';
import { OrderDetailController } from './orderDetail.controller';
import { OrderDetail } from './orderDetail.entity';
import { OrderDetailService } from './orderDetail.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OrderDetailController],
  providers: [OrderDetailService],
  imports: [TypeOrmModule.forFeature([OrderDetail])],
  exports: [TypeOrmModule],
})
export class OrderDetailModule {}

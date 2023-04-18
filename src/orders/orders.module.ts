import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { Orders } from './orders.entity';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [TypeOrmModule.forFeature([Orders])],
  exports: [TypeOrmModule],
})
export class OrdersModule {}

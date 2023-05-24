import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/products.entity';
import { ProductsModule } from './products/products.module';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { OrderHeader } from './orderHeader/orderHeader.entity';
import { OrderHeaderModule } from './orderHeader/orderHeader.module';
import { OrderDetail } from './orderDetail/orderDetail.entity';
import { OrderDetailModule } from './orderDetail/orderDetail.module';
import { CreateUsersDto } from './users/create-user.dto';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    OrderHeaderModule,
    OrderDetailModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'education',
      entities: [Product, Users, OrderHeader, OrderDetail],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

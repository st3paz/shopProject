import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/products.entity';
import { ProductsModule } from './products/products.module';
import { Users } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { Orders } from './orders/orders.entity';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ProductsModule,
    UsersModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'education',
      entities: [Product, Users, Orders],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

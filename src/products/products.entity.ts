import { OrderDetail } from 'src/orderDetail/orderDetail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  size: string;

  @Column()
  condition: number;

  @Column()
  count: number;

  @Column()
  price: number;

  @OneToMany((type) => OrderDetail, (orderDetail) => orderDetail.product_id)
  orderDetail: OrderDetail[];
}

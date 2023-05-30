import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from 'src/products/products.entity';
import { OrderHeader } from 'src/orderHeader/orderHeader.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  order_detail_id: number;

  @Column({default: 0})
  total_sum: number;

  @Column()
  count: number;

  @ManyToOne((type) => Product, (product) => product.orderDetail, {onDelete: "CASCADE"})
  @JoinColumn({
    name: 'product_id',
  })
  product: Product;

  @Column({ nullable: false })
  product_id: number;

  @ManyToOne((type) => OrderHeader, (orderHeader) => orderHeader.orderDetail, {onDelete: "CASCADE"})
  @JoinColumn({
    name: 'order_header_id',
  })
  orderHeader: OrderHeader;

  @Column({ nullable: false })
  order_header_id: number;
}

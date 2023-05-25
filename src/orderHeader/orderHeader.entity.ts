import { OrderDetail } from 'src/orderDetail/orderDetail.entity';
import { Users } from 'src/users/users.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class OrderHeader {
  @PrimaryGeneratedColumn()
  order_header_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  order_date: Date;

  @ManyToOne((type) => Users, (user) => user.orderHeader, {onDelete: "CASCADE"})
  @JoinColumn({
    name: 'user_id',
  })
  user: Users;

  @Column({ nullable: false })
  user_id: number;

  @OneToMany(
    (type) => OrderDetail,
    (orderDetail) => orderDetail.order_header_id,
  )
  orderDetail: OrderDetail[];
}

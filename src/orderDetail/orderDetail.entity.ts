import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  orderDetailId: number;

  //one headerId to many detailId

  //one prodId to many detailId

  @Column()
  price: number;

  @Column()
  count: number;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderHeader {
  @PrimaryGeneratedColumn()
  orderHeaderId: number;

  @Column()
  orderDate: Date;

  //many-to-one userId
}

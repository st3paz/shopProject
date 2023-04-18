import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orderDate: Date;

  @Column()
  userId: number;

  @Column()
  productId: number;
}

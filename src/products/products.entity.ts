import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  size: string;

  @Column()
  condition: string;

  @Column()
  count: number;

  @Column()
  price: number;
}

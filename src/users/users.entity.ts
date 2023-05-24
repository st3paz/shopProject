import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { OrderHeader } from 'src/orderHeader/orderHeader.entity';
import { IsEmail } from 'class-validator';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert() async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany((type) => OrderHeader, (orderHeader) => orderHeader.user_id)
  orderHeader: OrderHeader[];
}

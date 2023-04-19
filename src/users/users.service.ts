import { Injectable } from '@nestjs/common';
import { Users } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsersDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(user_id: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ user_id });
  }

  create(createUserDto: CreateUsersDto) {
    const users = new Users();
    users.first_name = createUserDto.first_name;
    users.last_name = createUserDto.last_name;
    users.email = createUserDto.email;
    users.password = createUserDto.password;
    return this.usersRepository.save(users);
  }

  async remove(user_id: number) {
    await this.usersRepository.delete(user_id);
  }
}

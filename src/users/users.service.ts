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

  findOne(userId: number): Promise<Users | null> {
    return this.usersRepository.findOneBy({ userId });
  }

  create(createUserDto: CreateUsersDto) {
    const users = new Users();
    users.firstName = createUserDto.firstName;
    users.lastName = createUserDto.lastName;
    users.email = createUserDto.email;
    users.password = createUserDto.password;
    return this.usersRepository.save(users);
  }

  async remove(userId: number) {
    await this.usersRepository.delete(userId);
  }
}

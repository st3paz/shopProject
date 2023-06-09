import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUsersDto } from './create-user.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':user_id')
  findOne(@Param('user_id') user_id: number): Promise<Users> {
    return this.usersService.findOne(user_id);
  }

  @Delete(':user_id')
  remove(@Param('user_id') user_id: number): Promise<void> {
    return this.usersService.remove(user_id);
  }
}

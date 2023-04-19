import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUsersDto } from './create-user.dto';
import { Users } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUsersDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('userId:id')
  findOne(@Param('userId') userId: number): Promise<Users> {
    return this.usersService.findOne(userId);
  }

  @Delete(':userId:id')
  remove(@Param('userId') userId: number): Promise<void> {
    return this.usersService.remove(userId);
  }
}

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [TypeOrmModule.forFeature([Users])],
  exports: [TypeOrmModule],
})
export class UsersModule {}

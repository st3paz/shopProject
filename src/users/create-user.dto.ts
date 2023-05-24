import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUsersDto {

  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}

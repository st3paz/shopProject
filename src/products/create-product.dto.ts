import { IsNumber, IsString } from "class-validator";

export class CreateProductDto {

  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  size: string;

  @IsString()
  condition: string;

  @IsNumber()
  count: number;

  @IsNumber()
  price: number;
}

import { IsNumber, IsString, Max, Min } from "class-validator";

export class CreateProductDto {

  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  size: string;

  @IsNumber()
  @Min(0)
  @Max(10)
  condition: number;

  @IsNumber()
  count: number;

  @IsNumber()
  price: number;
}

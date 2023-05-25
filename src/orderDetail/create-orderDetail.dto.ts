import { IsNumber } from "class-validator";

export class CreateOrderDetailDto {

  @IsNumber()
  count: number;

  @IsNumber()
  product_id: number;

  @IsNumber()
  order_header_id: number;
}

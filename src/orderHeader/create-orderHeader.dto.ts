import { IsNumber } from "class-validator";

export class CreateOrderHeaderDto {

  @IsNumber()
  user_id: number;
}

import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderItemDto {
    @ApiProperty()
    @IsNotEmpty()
    name : string;


    @ApiProperty()
    @IsNotEmpty()
    price : Number;

}

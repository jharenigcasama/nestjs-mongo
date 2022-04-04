import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { ProductItem } from "src/product_item/entities/product_item.entity";

export class CreatePurchasedItemDto {
    @ApiProperty()
    @IsNotEmpty()
    item_id : string;
    
    @ApiProperty()
    @IsNotEmpty()
    quantity : Number;
  

}

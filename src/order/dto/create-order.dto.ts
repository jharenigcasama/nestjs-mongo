import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { PurchasedItem } from "src/purchased_item/entities/purchased_item.entity";

export class CreateOrderDto {
   @ApiProperty()
    itemid : [PurchasedItem];
    
    @ApiProperty()
    @IsNotEmpty()
    quantity : number;
    
    @ApiProperty()
    customer : string;

    
 
   

}

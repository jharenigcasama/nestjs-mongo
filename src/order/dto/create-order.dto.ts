import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
   @ApiProperty()
    itemid : [Array<String>];
    
    @ApiProperty()
    @IsNotEmpty()
    quantity : number;
    
    @ApiProperty()
    customer : string;

    
 
   

}

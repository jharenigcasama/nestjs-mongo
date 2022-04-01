import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty()
    @IsNotEmpty()
    fname : string;
    
    @ApiProperty()
    @IsNotEmpty()
    lname : string;
    
    @ApiProperty()
    @IsNotEmpty()
    address : {
        main : string,
        work : string
    };
    
    @ApiProperty()
    @IsNotEmpty()
    age : number;

    
    @ApiProperty()
    @IsNotEmpty()
    contact :{
        mobile : string,
        telephone : string
    }
}
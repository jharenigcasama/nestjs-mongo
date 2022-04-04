import { IsNotEmpty } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    @IsNotEmpty()
    username : string;

    @ApiProperty()
    @IsNotEmpty()
    password : string;
}

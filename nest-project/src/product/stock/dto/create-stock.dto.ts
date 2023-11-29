import { Length, IsString, IsNumber } from "class-validator";

export class CreateStockDto {

    @IsString()
    @Length(4, 30, { message: '' })
    color:string;

    @IsString()
    @Length(4, 30, { message: '' })
    size:string;

    @IsNumber()
    quantity:number;

    @IsNumber()
    productId:number;

}

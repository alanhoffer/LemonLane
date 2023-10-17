import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateOrderDto {

    @IsString()
    status: string;

    @IsNumber()
    user: number;

    @IsOptional()
    @IsString()
    giftcard?: string;
}

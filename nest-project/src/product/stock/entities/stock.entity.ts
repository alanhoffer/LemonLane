import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('product_stock')
export class Stock {

    @PrimaryColumn()
    id:number;

    @Column()
    color:string;

    @Column()
    size:string;

    @Column()
    quantity:number;

    @Column()
    image: string;

    @Column()
    productId:number;
}

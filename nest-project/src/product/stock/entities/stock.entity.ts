import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('product_stock')
export class Stock {

    @PrimaryColumn()
    id:number;

    @Column({ type: 'varchar', length: 100 })
    color:string;

    @Column({ type: 'varchar', length: 100 })
    size:string;

    @Column()
    quantity:number;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @Column()
    productId:number;

    @ManyToOne(() => Product, product => product.stocks) 
    @JoinColumn({ name: "productId" })
    product: Product;
    
}

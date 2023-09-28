import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity('collection')
export class Collection {

    @PrimaryColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;
    
    @OneToOne(() => Product, product => product.collectionId) 
    @JoinColumn({ name: "productId" })
    product: Product;
}

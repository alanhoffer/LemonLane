import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('collection')
export class Collection {

    constructor(name:string, description:string){
        this.name = name;
        this.description = description;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;
    
    @OneToOne(() => Product, product => product.collectionId) 
    @JoinColumn({ name: "productId" })
    product: Product;
}

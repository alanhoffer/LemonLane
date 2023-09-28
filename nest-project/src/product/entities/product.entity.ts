import { Collection, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Stock } from "../stock/entities/stock.entity";
import { Category } from "../category/entities/category.entity";

@Entity('product')
export class Product {

    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @OneToOne(() => Collection)
    @JoinColumn()
    collectionId: number;

    @OneToOne(() => Category)
    @JoinColumn()
    categoryId:number;

    @OneToMany(() => Stock, stock => stock.product)
    @JoinColumn()
    stocks: Stock[];
}

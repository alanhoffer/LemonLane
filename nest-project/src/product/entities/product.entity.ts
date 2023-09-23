import { Column, Entity, PrimaryColumn } from "typeorm";

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

    @Column()
    collectionId: number;

    @Column()
    categoryId: number;
}

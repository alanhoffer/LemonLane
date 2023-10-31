import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Stock } from "../stock/entities/stock.entity";
import { Category } from "../category/entities/category.entity";
import { Collection } from "../collection/entities/collection.entity";
import { OrderItem } from "src/order/order-item/entities/order-item.entity";

@Entity('product')
export class Product {

    constructor(name: string, price: number, description: string, collection: Collection, category: Category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.collection = collection;
        this.category = category;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @OneToOne(() => Collection)
    @JoinColumn()
    collection: Collection;

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category;

    @OneToMany(() => Stock, stock => stock.product)
    @JoinColumn()
    stocks: Stock[];

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[];
}

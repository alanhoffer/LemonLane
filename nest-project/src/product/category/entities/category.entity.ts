import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, type: 'varchar', length: 100 })
    name: string;

    @OneToOne(() => Product, product => product.categoryId) 
    @JoinColumn({ name: "productId" })
    product: Product;

    constructor(name: string) {
        this.name = name;
    }

    public getId(): number {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public setName(name: string): void {
        this.name = name;
    };
}

import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "../order-item/entities/order-item.entity";

@Entity('order')
export class Order {

    constructor(status: string, user: User, giftcard?: string) {
        this.status = status;
        this.user = user;
        this.giftcard = giftcard;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @CreateDateColumn()
    date: Date;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @OneToMany(() => OrderItem, orderItem => orderItem.order)
    orderItems: OrderItem[];
    
    @Column({ nullable: true })
    giftcard?: string;
}

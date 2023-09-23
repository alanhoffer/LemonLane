import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('order_item')
export class OrderItem {

    @PrimaryColumn()
    id: number;

    @Column()
    quantity: number;

    @Column()
    orderId: number;

    @Column()
    orderUserId: number;

    @Column()
    productId: number;
}

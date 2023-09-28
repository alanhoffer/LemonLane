import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('order')
export class Order {

    @PrimaryColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    date: Date;

    @Column()
    userId: number;

    @Column({ nullable: true })
    giftcard?: string;
}

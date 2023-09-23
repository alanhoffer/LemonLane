import { Column, Entity, PrimaryColumn } from "typeorm";

Entity('giftcard')
export class Giftcard {

    @PrimaryColumn()
    id: number;
    
    @Column()
    discount: number;
    
    @Column()
    userId: number;
}

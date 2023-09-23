import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('collection')
export class Collection {

    @PrimaryColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    image:string;

    @Column()
    description:string;
}

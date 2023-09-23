import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('category')
export class Category {
    
    @PrimaryColumn()
    id:number;

    @Column()
    name:string;
}

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('collection')
export class Collection {

    @PrimaryColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 255 })
    image: string;

    @Column({ type: 'varchar', length: 255 })
    description: string;
    
}

import { User } from "src/user/entities/user.entity";
import { Entity, PrimaryColumn, Column, ManyToMany } from "typeorm";

@Entity('address')
export class Address {

    @PrimaryColumn()
    id: number;

    @Column()
    zipCode: number;

    @Column()
    province: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column({nullable: true})
    extra: string;
    
    @ManyToMany(() => User, user => user.addresses)
    users: User[];
}

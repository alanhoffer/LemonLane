import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Address } from "../address/entities/address.entity";

@Entity('user')
export class User {
    @PrimaryColumn()
    id:number;

    @Column()
    email:string;
    
    @Column()
    name:string;
    
    @Column()
    lname:string;
    
    @Column()
    password:string;
    
    @Column()
    role: string;
    
    @ManyToMany(() => Address, address => address.users)
    @JoinTable()
    addresses: Address[];
}

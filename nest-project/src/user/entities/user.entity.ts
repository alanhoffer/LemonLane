import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../address/entities/address.entity";
import { Role } from "src/auth/enum/role.enum";
import { Order } from "src/order/entities/order.entity";

@Entity('user')
export class User {

    constructor(id: number, email: string, name: string, lname: string, password: string, role: string, addresses: Address[]) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.lname = lname;
        this.password = password;
    }


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    name: string;

    @Column()
    lname: string;

    @CreateDateColumn()
    date: Date;

    @Column()
    password: string;

    @ManyToMany(() => Address, address => address.users)
    @JoinTable()
    addresses: Address[];

    @OneToMany(() => Order, order => order.user)
    orders: Order[]; 
}

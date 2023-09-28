import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('category')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, type: 'varchar', length: 100 })
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    public getId(): number {
        return this.id;
    };

    public getName(): string {
        return this.name;
    };

    public setName(name: string): void {
        this.name = name;
    };
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Type } from "./type.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    start_date: Date;

    @Column()
    end_date: Date;

    @ManyToOne(() => Type, type => type.task)
    type: Type;
}
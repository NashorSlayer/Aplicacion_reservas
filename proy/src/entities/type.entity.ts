import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class Type {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @OneToMany(() => Task, task => task.type)
    task: Task[];
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Task } from './task.entity';

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    city: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Task)
    tasks: Task[];
}


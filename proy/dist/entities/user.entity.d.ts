import { Task } from './task.entity';
export declare class User {
    id: string;
    name: string;
    last_name: string;
    city: string;
    email: string;
    password: string;
    tasks: Task[];
}

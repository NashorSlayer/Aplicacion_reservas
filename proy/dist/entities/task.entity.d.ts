import { Type } from "./type.entity";
export declare class Task {
    id: string;
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    type: Type;
}

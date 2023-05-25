import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserEntity1684984961111 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

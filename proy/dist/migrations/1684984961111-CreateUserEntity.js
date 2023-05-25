"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserEntity1684984961111 = void 0;
class CreateUserEntity1684984961111 {
    constructor() {
        this.name = 'CreateUserEntity1684984961111';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.CreateUserEntity1684984961111 = CreateUserEntity1684984961111;
//# sourceMappingURL=1684984961111-CreateUserEntity.js.map
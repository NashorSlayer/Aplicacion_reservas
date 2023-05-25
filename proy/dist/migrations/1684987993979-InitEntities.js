"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitEntities1684987993979 = void 0;
class InitEntities1684987993979 {
    constructor() {
        this.name = 'InitEntities1684987993979';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "type" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, CONSTRAINT "PK_40410d6bf0bedb43f9cadae6fef" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "task" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "typeId" uuid, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD "last_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "task" ADD CONSTRAINT "FK_37835cf91476a114202962303c1" FOREIGN KEY ("typeId") REFERENCES "type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "task" DROP CONSTRAINT "FK_37835cf91476a114202962303c1"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "last_name"`);
        await queryRunner.query(`DROP TABLE "task"`);
        await queryRunner.query(`DROP TABLE "type"`);
    }
}
exports.InitEntities1684987993979 = InitEntities1684987993979;
//# sourceMappingURL=1684987993979-InitEntities.js.map
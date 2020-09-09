import {MigrationInterface, QueryRunner} from "typeorm";

export class createProfessionalAndSpeciality1599614253214 implements MigrationInterface {
    name = 'createProfessionalAndSpeciality1599614253214'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "specialties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba01cec5aa8ac48778a1d097e98" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professionals" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d7dc8473b49fcd938def2799387" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professionals_specialties_specialties" ("professionalsId" uuid NOT NULL, "specialtiesId" uuid NOT NULL, CONSTRAINT "PK_434a72235b426c57a3f314af82a" PRIMARY KEY ("professionalsId", "specialtiesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d90f1427f1e26b600ce28139a1" ON "professionals_specialties_specialties" ("professionalsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_65f0319b9c3160dd0a3012b357" ON "professionals_specialties_specialties" ("specialtiesId") `);
        await queryRunner.query(`ALTER TABLE "professionals_specialties_specialties" ADD CONSTRAINT "FK_d90f1427f1e26b600ce28139a15" FOREIGN KEY ("professionalsId") REFERENCES "professionals"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professionals_specialties_specialties" ADD CONSTRAINT "FK_65f0319b9c3160dd0a3012b3573" FOREIGN KEY ("specialtiesId") REFERENCES "specialties"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professionals_specialties_specialties" DROP CONSTRAINT "FK_65f0319b9c3160dd0a3012b3573"`);
        await queryRunner.query(`ALTER TABLE "professionals_specialties_specialties" DROP CONSTRAINT "FK_d90f1427f1e26b600ce28139a15"`);
        await queryRunner.query(`DROP INDEX "IDX_65f0319b9c3160dd0a3012b357"`);
        await queryRunner.query(`DROP INDEX "IDX_d90f1427f1e26b600ce28139a1"`);
        await queryRunner.query(`DROP TABLE "professionals_specialties_specialties"`);
        await queryRunner.query(`DROP TABLE "professionals"`);
        await queryRunner.query(`DROP TABLE "specialties"`);
    }

}

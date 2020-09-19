import {MigrationInterface, QueryRunner} from "typeorm";

export class createAttendances1600558303904 implements MigrationInterface {
    name = 'createAttendances1600558303904'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "attendances" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "place" character varying(100) NOT NULL, "professional" character varying(100) NOT NULL, "specialty" character varying(100) NOT NULL, "pass_by_reception" boolean NOT NULL, "date_attendance" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_483ed97cd4cd43ab4a117516b69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "attendances_medical_records_medical_records" ("attendancesId" uuid NOT NULL, "medicalRecordsId" uuid NOT NULL, CONSTRAINT "PK_8091483cea6120c4c9f6047611f" PRIMARY KEY ("attendancesId", "medicalRecordsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bd8896e27d16d7cb99b42ab6d1" ON "attendances_medical_records_medical_records" ("attendancesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_44f435ee59ae49a133b260f46e" ON "attendances_medical_records_medical_records" ("medicalRecordsId") `);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "attendances_medical_records_medical_records" ADD CONSTRAINT "FK_bd8896e27d16d7cb99b42ab6d1f" FOREIGN KEY ("attendancesId") REFERENCES "attendances"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "attendances_medical_records_medical_records" ADD CONSTRAINT "FK_44f435ee59ae49a133b260f46e5" FOREIGN KEY ("medicalRecordsId") REFERENCES "medical_records"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "attendances_medical_records_medical_records" DROP CONSTRAINT "FK_44f435ee59ae49a133b260f46e5"`);
        await queryRunner.query(`ALTER TABLE "attendances_medical_records_medical_records" DROP CONSTRAINT "FK_bd8896e27d16d7cb99b42ab6d1f"`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`DROP INDEX "IDX_44f435ee59ae49a133b260f46e"`);
        await queryRunner.query(`DROP INDEX "IDX_bd8896e27d16d7cb99b42ab6d1"`);
        await queryRunner.query(`DROP TABLE "attendances_medical_records_medical_records"`);
        await queryRunner.query(`DROP TABLE "attendances"`);
    }

}

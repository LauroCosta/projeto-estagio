import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createMedicalrecorde1599958720062
  implements MigrationInterface {
  name = 'createMedicalrecorde1599958720062';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "medical_records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "sequence" integer NOT NULL, "name" character varying(100) NOT NULL, "mother_name" character varying(100), "gender" character varying(1), "status" character varying(25), "isActive" boolean NOT NULL DEFAULT true, "birth_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "placeId" uuid, CONSTRAINT "UQ_4d6c26baaa5e20ac1e50f7050e1" UNIQUE ("sequence"), CONSTRAINT "PK_c200c0b76638124b7ed51424823" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "medical_records" ADD CONSTRAINT "FK_a299abdc599a97cc0190a2d010d" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "medical_records" DROP CONSTRAINT "FK_a299abdc599a97cc0190a2d010d"`,
    );
    await queryRunner.query(`DROP TABLE "medical_records"`);
  }
}

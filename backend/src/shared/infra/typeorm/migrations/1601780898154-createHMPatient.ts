import { MigrationInterface, QueryRunner } from 'typeorm';

export default class createHMPatient1601780898154
  implements MigrationInterface {
  name = 'createHMPatient1601780898154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "hm_patient" ("patient_id" integer NOT NULL, "patient_sus" character varying(15), "patient_location" character varying(20), "patient_name" character varying(100), "patient_name_social" character varying(30), "patient_date_birth" date NOT NULL, "patient_naturalness" integer, "patient_gender" character varying(1), "patient_cpf" character varying(11), "patient_nationality" integer, "patient_father" character varying(40), "patient_mother" character varying(40), "patient_profession" integer, "patient_address" character varying(40), "patient_address_number" character varying(7), "patient_address_complement" character varying(15), "neighborhood_id" integer, "patient_address_reference" character varying(70), "patient_telephone" character varying(25), "patient_telephone2" character varying(25) NOT NULL, "patient_cep" character varying(11) NOT NULL, "patient_register" date, "patient_register_user" integer NOT NULL, "patient_note" character varying(40), "patient_update" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "patient_update_user" integer, "patient_status" character varying(1) NOT NULL, CONSTRAINT "PK_0eea2373a76fe318460fd6bc238" PRIMARY KEY ("patient_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "hm_patient"`);
  }
}

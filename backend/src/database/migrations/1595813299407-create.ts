import { MigrationInterface, QueryRunner } from 'typeorm';

export default class create1595813299407 implements MigrationInterface {
  name = 'create1595813299407';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `medical_services` (`id` varchar(36) NOT NULL, `place` varchar(255) NOT NULL, `professional` varchar(255) NOT NULL, `specialty` varchar(255) NOT NULL, `pass_by_reception` tinyint NOT NULL, `service_date` datetime NOT NULL, `shift` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `medical_records` (`id` varchar(36) NOT NULL, `sequence_number` int NOT NULL, `name` varchar(255) NOT NULL, `mother_name` varchar(255) NOT NULL, `local_id` int NOT NULL, `birth_date` timestamp NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX `IDX_1ba9563eaba11fd95bf8fd0560` (`sequence_number`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `places` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `specialties` (`id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `professionals` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `professionals_specialties_specialties` (`professionalsId` int NOT NULL, `specialtiesId` int NOT NULL, INDEX `IDX_d90f1427f1e26b600ce28139a1` (`professionalsId`), INDEX `IDX_65f0319b9c3160dd0a3012b357` (`specialtiesId`), PRIMARY KEY (`professionalsId`, `specialtiesId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `professionals_specialties_specialties` ADD CONSTRAINT `FK_d90f1427f1e26b600ce28139a15` FOREIGN KEY (`professionalsId`) REFERENCES `professionals`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `professionals_specialties_specialties` ADD CONSTRAINT `FK_65f0319b9c3160dd0a3012b3573` FOREIGN KEY (`specialtiesId`) REFERENCES `specialties`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `professionals_specialties_specialties` DROP FOREIGN KEY `FK_65f0319b9c3160dd0a3012b3573`',
    );
    await queryRunner.query(
      'ALTER TABLE `professionals_specialties_specialties` DROP FOREIGN KEY `FK_d90f1427f1e26b600ce28139a15`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_65f0319b9c3160dd0a3012b357` ON `professionals_specialties_specialties`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_d90f1427f1e26b600ce28139a1` ON `professionals_specialties_specialties`',
    );
    await queryRunner.query(
      'DROP TABLE `professionals_specialties_specialties`',
    );
    await queryRunner.query('DROP TABLE `professionals`');
    await queryRunner.query('DROP TABLE `specialties`');
    await queryRunner.query('DROP TABLE `places`');
    await queryRunner.query(
      'DROP INDEX `IDX_1ba9563eaba11fd95bf8fd0560` ON `medical_records`',
    );
    await queryRunner.query('DROP TABLE `medical_records`');
    await queryRunner.query('DROP TABLE `medical_services`');
  }
}

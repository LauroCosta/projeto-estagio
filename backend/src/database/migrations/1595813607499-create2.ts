import {MigrationInterface, QueryRunner} from "typeorm";

export class create21595813607499 implements MigrationInterface {
    name = 'create21595813607499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `medical_records_medical_services_medical_services` (`medicalRecordsId` varchar(36) NOT NULL, `medicalServicesId` varchar(36) NOT NULL, INDEX `IDX_0e719857700eb98d094d66e11c` (`medicalRecordsId`), INDEX `IDX_0915817b79089fd65ce47e9679` (`medicalServicesId`), PRIMARY KEY (`medicalRecordsId`, `medicalServicesId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `medical_records_medical_services_medical_services` ADD CONSTRAINT `FK_0e719857700eb98d094d66e11cd` FOREIGN KEY (`medicalRecordsId`) REFERENCES `medical_records`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `medical_records_medical_services_medical_services` ADD CONSTRAINT `FK_0915817b79089fd65ce47e96796` FOREIGN KEY (`medicalServicesId`) REFERENCES `medical_services`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `medical_records_medical_services_medical_services` DROP FOREIGN KEY `FK_0915817b79089fd65ce47e96796`");
        await queryRunner.query("ALTER TABLE `medical_records_medical_services_medical_services` DROP FOREIGN KEY `FK_0e719857700eb98d094d66e11cd`");
        await queryRunner.query("DROP INDEX `IDX_0915817b79089fd65ce47e9679` ON `medical_records_medical_services_medical_services`");
        await queryRunner.query("DROP INDEX `IDX_0e719857700eb98d094d66e11c` ON `medical_records_medical_services_medical_services`");
        await queryRunner.query("DROP TABLE `medical_records_medical_services_medical_services`");
    }

}

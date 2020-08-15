import { MigrationInterface, QueryRunner } from 'typeorm';

export default class addUsername1597452066065 implements MigrationInterface {
  name = 'addUsername1597452066065';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `users` ADD `userName` varchar(255) NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `users` DROP COLUMN `userName`');
  }
}

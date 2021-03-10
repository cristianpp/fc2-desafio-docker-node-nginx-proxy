import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePeoples1615225246331 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(

            new Table({
                name: 'peoples',
                columns: [
                    {
                     name: 'id',
                     type: 'varchar',
                     isPrimary: true,

                   },
                   {
                     name: 'nome',
                     type: 'varchar',
                     isNullable: false,
                   },
                
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('peoples');
    }

}

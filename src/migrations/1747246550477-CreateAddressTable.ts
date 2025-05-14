import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddressTable1747246550477 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE address (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                street_1 VARCHAR(255),
                street_2 VARCHAR(255),
                city VARCHAR(255),
                country VARCHAR(255),
                geocode VARCHAR(255),
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now()
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE address;`);
    }

}

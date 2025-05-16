import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1747237207177 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        CREATE TABLE public."user" (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
            username VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            gender VARCHAR(1) NOT NULL,
            birth_date DATE NOT NULL,
            id_number VARCHAR(10) NOT NULL,
            phone_number VARCHAR(15) NOT NULL,
            created_at TIMESTAMP DEFAULT now(),
            updated_at TIMESTAMP DEFAULT now()
        );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE public."user"`)
    }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCategoryTable1747246527547 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE category (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                description VARCHAR(255),
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now()
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE public.category`);
    }

}

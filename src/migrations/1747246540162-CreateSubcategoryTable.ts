import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSubcategoryTable1747246540162 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE subcategory (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                category_id UUID NOT NULL,
                description VARCHAR(255),
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now(),
                CONSTRAINT fk_subcategory_category FOREIGN KEY (category_id) REFERENCES category(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE subcategory;`);
    }

}

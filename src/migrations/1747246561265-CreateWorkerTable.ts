import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorkerTable1747246561265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE worker (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                user_id UUID NOT NULL,
                subcategory_id UUID NOT NULL,
                address_id UUID NOT NULL,
                url VARCHAR(255),
                instagram VARCHAR(255),
                facebook VARCHAR(255),
                created_at TIMESTAMP DEFAULT now(),
                updated_at TIMESTAMP DEFAULT now(),
                CONSTRAINT fk_worker_user FOREIGN KEY (user_id) REFERENCES "user"(id),
                CONSTRAINT fk_worker_subcategory FOREIGN KEY (subcategory_id) REFERENCES subcategory(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE worker;`);
    }

}

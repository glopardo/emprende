import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateReviewTable1747246571192 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE review (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                worker_id UUID NOT NULL,
                score INT NOT NULL,
                comment VARCHAR(255),
                reply VARCHAR(255),
                created_at TIMESTAMP DEFAULT now(),
                CONSTRAINT fk_review_worker FOREIGN KEY (worker_id) REFERENCES worker(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE review;`);
    }

}

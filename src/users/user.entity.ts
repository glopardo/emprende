import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 50 })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    first_name: string;

    @Column({ type: 'varchar', length: 50 })
    last_name: string;

    @Column({ type: 'varchar', length: 1 })
    gender: string;

    @Column({ type: 'date' })
    birth_date: Date;

    @Column({ type: 'varchar', length: 10 })
    id_number: string;

    @Column({ type: 'varchar', length: 15 })
    phone_number: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}

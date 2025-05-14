// data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'emprende',
	entities: ['src/**/*.entity.ts'],
	migrations: ['src/migrations/*.ts'],
	synchronize: false,
});

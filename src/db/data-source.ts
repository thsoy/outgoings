import { DataSource } from 'typeorm';
import { Outgoings } from '@modules/outgoings/entity';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5454,
	username: 'thsoy',
	password: 'thsoy',
	database: 'thsoy',
	synchronize: true,
	logging: true,
	entities: [Outgoings],
	subscribers: [],
	migrations: [],
});

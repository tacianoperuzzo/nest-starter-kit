import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { getConfig } from './src/config/config.service';

dotenv.config();

const {
  database: { host, port, password, username, dbName },
} = getConfig();

export default new DataSource({
  type: 'postgres',
  host,
  port,
  username: username,
  password,
  database: dbName,
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/**/migrations/*.ts'],
  subscribers: ['src/**/subscribers/*.ts'],
});

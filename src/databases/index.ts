import config from 'config';
import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { dbConfig } from '@interfaces/db.interface';

const { host, user, password, database }: dbConfig = config.get('dbConfig');

export const dbConnection: ConnectionOptions = {
  type: 'mysql',
  host: host,
  port: 3306,
  username: user,
  password: process.env.DB_PASSWORD || password,
  database: database,
  synchronize: true,
  logging: process.env.NODE_ENV !== 'production',
  entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '../**/*.migration{.ts,.js}')],
  subscribers: [path.join(__dirname, '../**/*.subscriber{.ts,.js}')],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

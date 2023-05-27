import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConfig } from '../config/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const {
          database: { host, port, password, username, dbName },
        } = getConfig();

        return {
          type: 'postgres',
          host,
          port,
          username: username,
          password,
          database: dbName,
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class DbModule {}

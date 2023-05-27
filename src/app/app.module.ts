import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ModulesModule } from 'src/modules/modules.module';
import { AuthModule } from 'src/core/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, ModulesModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
  ],
})
export class AppModule {}

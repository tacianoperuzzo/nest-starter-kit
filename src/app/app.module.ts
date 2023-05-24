import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { ModulesModule } from 'src/modules/modules.module';
import { AuthModule } from 'src/core/auth/auth.module';

@Module({
  imports: [DbModule, ModulesModule, AuthModule],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PhonesController } from './phones.controller';
import { PhonesService } from './phones.service';
import { MulterModule } from '@nestjs/platform-express';
import { PhonesSchemaProvider } from './providers/phones.schema.provider';
import { databaseProvider } from 'src/database/database.provider';
import { environmentProvider } from 'src/environment/environment.provider';

@Module({
  imports: [],
  controllers: [PhonesController],
  providers: [PhonesService, PhonesSchemaProvider, databaseProvider, environmentProvider]
})
export class PhonesModule {}
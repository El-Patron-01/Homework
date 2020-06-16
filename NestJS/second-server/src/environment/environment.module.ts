import { Module } from '@nestjs/common';
import { environmentProvider } from './environment.provider';

@Module({
  imports: [],
  providers: [environmentProvider],
})
export class EnvironmentModule {}

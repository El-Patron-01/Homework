import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { EnvironmentModule } from 'src/environment/environment.module';
import { UserService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { userSchemaProvider } from './providers/user.schema.provider';
import { userAndCarsSchemaProvider } from './providers/user.and.cars.schema.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UserService, userSchemaProvider, userAndCarsSchemaProvider]
})
export class UsersModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [UsersModule, ProductModule, CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

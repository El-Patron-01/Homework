import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { carSchemaProvider } from "./providers/car.schema.provider";
import { CarsController } from "./cars.controller";
import { CarService } from "./cars.service";

@Module({
    imports: [DatabaseModule],
    controllers: [CarsController],
    providers: [CarService, carSchemaProvider]
  })
  export class CarsModule {}
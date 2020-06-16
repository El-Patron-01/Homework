import { Module } from "@nestjs/common";
import { EnvironmentModule } from "src/environment/environment.module";
import { databaseProvider } from "./database.provider";


@Module({
    imports: [EnvironmentModule],
    providers: [databaseProvider],
    exports: [databaseProvider],
})

export class DatabaseModule {}
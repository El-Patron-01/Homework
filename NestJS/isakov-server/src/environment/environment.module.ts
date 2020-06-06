import { Module } from "@nestjs/common";
import { environmentProvider } from "./environment.provider";


@Module({
    providers: [environmentProvider],
    exports: [environmentProvider]
})

export class EnvironmentModule {}

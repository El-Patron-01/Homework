import { DatabaseToken, EnvironmentToken } from "src/constants";
import { IEnvironment } from "src/environment/environment.provider";
import * as mongoose from 'mongoose';
import { async } from "rxjs/internal/scheduler/async";

export const databaseProvider = {
    provide: DatabaseToken,
    useFactory: async (envrironment: IEnvironment) => {
        const dbConnection = mongoose.connection;
        await mongoose.connect(envrironment.MONGO_URI, {autoIndex: true, useCreateIndex: true});
        return dbConnection;
    },
    inject: [EnvironmentToken],
}
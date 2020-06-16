import { DatabaseToken, EnvironmentToken } from "src/constants";
import { IEnvironment } from "src/environment/environment.provider";
import * as mongoose from 'mongoose';

export const databaseProvider = {
    provide: DatabaseToken,
    useFactory: async (envrironment: IEnvironment) => {
        await mongoose.connect(envrironment.MONGO_URI, {autoIndex: true, useCreateIndex: true});
        const dbConnection = mongoose.connection;
        return dbConnection;
    },
    inject: [EnvironmentToken],
}
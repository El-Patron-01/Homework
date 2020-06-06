import { UserAndCarsSchemaToken } from "./providers.tokens";
import { DatabaseToken } from "src/constants";
import { Connection, Document, Model } from 'mongoose'
import { userAndCarsSchema } from "../schema/user.and.cars.schema";

export const userAndCarsSchemaProvider = {
    provide: UserAndCarsSchemaToken,
    useFactory: (connection: Connection): Model<Document> => {
        return connection.model('userandcarschema', userAndCarsSchema)
    },
    inject: [DatabaseToken],
};
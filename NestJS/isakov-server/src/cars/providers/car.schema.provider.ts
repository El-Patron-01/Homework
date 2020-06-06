
import { DatabaseToken } from "src/constants";
import { Connection, Document, Model } from 'mongoose'
import { CarSchema } from "../schema/car.schema";
import { CarSchemaToken } from "./providers.tokens";

export const carSchemaProvider = {
    provide: CarSchemaToken,
    useFactory: (connection: Connection): Model<Document> => {
        return connection.model('carschema', CarSchema)
    },
    inject: [DatabaseToken],
};
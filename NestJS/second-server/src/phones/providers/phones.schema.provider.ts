
import { DatabaseToken } from "src/constants";
import { Connection, Document, Model } from 'mongoose'
import { PhonesSchemaToken } from "./providers.token";
import { phonesSchema } from "../schema/phones.schema";


export const PhonesSchemaProvider = {
    provide: PhonesSchemaToken,
    useFactory: (connection: Connection): Model<Document> => {
        return connection.model('phonesschema', phonesSchema)
    },
    inject: [DatabaseToken],
};
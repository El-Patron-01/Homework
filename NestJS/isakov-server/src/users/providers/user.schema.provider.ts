import { UserSchemaToken } from "./providers.tokens";
import { DatabaseToken } from "src/constants";
import { Connection, Document, Model } from 'mongoose'
import { userSchema } from "../schema/user.schema";

export const userSchemaProvider = {
    provide: UserSchemaToken,
    useFactory: (connection: Connection): Model<Document> => {
        return connection.model('userschema', userSchema)
    },
    inject: [DatabaseToken],
};
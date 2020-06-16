import { Injectable, Inject } from "@nestjs/common";
import { PhonesSchemaToken } from "./providers/providers.token";
import { Model } from 'mongoose'
import { PhonesSchema, IPhonesSchema } from "./schema/phones.schema";


@Injectable()
export class PhonesService {
    constructor (
        @Inject(PhonesSchemaToken) private phonesTable: Model<IPhonesSchema>
    ) {}
    
public async createPhones(phone: PhonesSchema) {
    return this.phonesTable.create(phone)
    }
   
}
import { CarSchemaToken } from "./providers/providers.tokens"
import { ICarSchema, CarSchema } from "./schema/car.schema"
import { Inject } from "@nestjs/common"
import { Model } from 'mongoose'

@Injectable()
export class CarService {
    constructor(
        @Inject(CarSchemaToken) private carTable: Model<ICarSchema>
    ){}

    public async createCar(car: ICarSchema) {
        return this.carTable.create(car)
    }

}
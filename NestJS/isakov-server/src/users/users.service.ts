import { Injectable, Inject } from "@nestjs/common";
import { allUsers } from "./consts";
import { UserSchemaToken, UserAndCarsSchemaToken } from "./providers/providers.tokens";
import { IUserSchema, UserSchema } from "./schema/user.schema";
import { Model } from 'mongoose'
import { IUserAndCarsSchema } from "./schema/user.and.cars.schema";


@Injectable()
export class UserService {
    constructor(
        @Inject(UserSchemaToken) private userTable: Model<IUserSchema>,
        @Inject(UserAndCarsSchemaToken) private userAndCarsTable: Model<IUserAndCarsSchema>
    ){}
    public getUser(id: number) {
        return allUsers.find(el => el.id === id)
    }

    public async createUser(user: UserSchema) {
        return this.userTable.create(user)
    }

    public async findUserAndCars(query: any = {}): Promise<any> {
        return await this.userTable.aggregate([
            {
                $match: query,
            },
            {
                $lookup:
                    {
                        from: 'carschemas',
                        localField: '_id',
                        foreignField: 'userId',
                        as: 'cars',   
                    }
            }
        ])
    }

    public users() {
        return allUsers
    }
}
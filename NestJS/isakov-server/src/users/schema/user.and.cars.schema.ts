import * as mongoose from 'mongoose';



export const userAndCarsSchema: any = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    cars: Array,
});

export interface IUserAndCarsSchema {
  readonly name: string;
  readonly lastName: string;
  readonly email: number;
  readonly cars: Array<{}>;
}

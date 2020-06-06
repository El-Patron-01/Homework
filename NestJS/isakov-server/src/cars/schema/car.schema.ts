import * as mongoose from 'mongoose';
import { ObjectId } from 'mongoose';

const id = mongoose.Schema.Types.ObjectId;

export const CarSchema: any = new mongoose.Schema({
  mark: String,
  model: String,
  price: Number,
  userId: id,
});

export interface ICarSchema {
  readonly mark: string;
  readonly model: string;
  readonly price: number;
  readonly userId: ObjectId;
}


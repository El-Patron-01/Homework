import * as mongoose from 'mongoose';

export const phonesSchema: any = new mongoose.Schema({
  name: String,
  description: String,
  imgPath: String,
});

export interface PhonesSchema {
  readonly name: string;
  readonly description: string;
  imgPath: string;
}

export interface IPhonesSchema extends PhonesSchema, Document {}
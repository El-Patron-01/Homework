import * as mongoose from 'mongoose'


export const userSchema = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
    
  })

  export interface UserSchema {
    name:  string;
    lastName: string;
    email:   string;
  };

  export interface IUserSchema extends UserSchema, Document {}
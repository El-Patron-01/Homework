import * as dotenv from 'dotenv'
import { EnvironmentToken } from 'src/constants';

dotenv.config();

export interface IEnvironment {
    MONGO_URI: string
}

export const environmentProvider = {
    provide: EnvironmentToken,
    useValue: process.env,
}
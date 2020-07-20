import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });

process.env.NODE_ENV = 'testing';
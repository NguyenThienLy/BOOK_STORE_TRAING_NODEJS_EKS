import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../.env` });

let path;
switch (process.env.NODE_ENV) {
  case "testing":
    path = `${__dirname}/../.env.testing`;
    break;
  case "production":
    path = `${__dirname}/../.env.production`;
    break;
  default:
    path = `${__dirname}/../.env.development`;
}

dotenv.config({ path: path });
import * as env from "env-var";
import dotenv from "dotenv";

interface IEnvironment {
  DB_TYPE: "postgres";
  DB_PORT: number;
  DB_HOST: string;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_DATABASE: string;
  DB_LOGGING: boolean;
  SERVER_PORT: number;
  ENVIRONMENT: "dev" | "production";
}

console.log(process.env.ENVIRONMENT);

switch (process.env.ENVIRONMENT) {
  case "prod":
    dotenv.config({ path: ".env.production" });
    break;
  default:
    dotenv.config({ path: ".env" });
}

export default {
  DB_TYPE: env.get("DB_TYPE").required().asString(),
  DB_PORT: env.get("DB_PORT").required().asPortNumber(),
  DB_HOST: env.get("DB_HOST").required().asString(),
  DB_USERNAME: env.get("DB_USERNAME").required().asString(),
  DB_PASSWORD: env.get("DB_PASSWORD").required().asString(),
  DB_DATABASE: env.get("DB_DATABASE").required().asString(),
  DB_LOGGING: env.get("DB_LOGGING").asBool(),

  SERVER_PORT: env.get("SERVER_PORT").required().asPortNumber(),
  ENVIRONMENT: env.get("ENVIRONMENT").required().asString(),
} as IEnvironment;

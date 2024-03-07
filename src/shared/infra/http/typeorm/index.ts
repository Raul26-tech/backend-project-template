import environment from "src/config/environment";
import { DataSource } from "typeorm";

let entitiesPath = "";
let migrationsPath = "";

const { ENVIRONMENT } = environment;

switch (ENVIRONMENT) {
  case "dev":
    entitiesPath = "./src/modules/**/entities/*.ts";
    migrationsPath = "./src/shared/infra/typeorm/migrations/*.ts";
  case "production":
    entitiesPath = "./dist/src/modules/**/entities/*.js";
    migrationsPath = ".dist/src/shared/infra/typeorm/migrations/*.js";

  default:
    break;
}

export const AppDataSource = new DataSource({
  type: environment.DB_TYPE,
  port: environment.DB_PORT,
  host: environment.DB_HOST,
  username: environment.DB_USERNAME,
  password: environment.DB_PASSWORD,
  database: environment.DB_DATABASE,
  entities: [entitiesPath],
  migrations: [migrationsPath],
});

export const connectDb = async () => {
  try {
    const dataSource = await AppDataSource.initialize();
    console.log("Data Source has been initialized");
    await dataSource.runMigrations();
    console.log("Migrations has been executed");
    return dataSource;
  } catch (error) {
    console.log("Error during Data Source inicialization", error);
  }
};

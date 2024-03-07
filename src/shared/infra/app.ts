import "express-async-errors";
import express from "express";
import { router } from "./http/routes";
import dotenv from "dotenv";
import { connectDb } from "./http/typeorm";

dotenv.config({
  path: process.env.ENVIRONMENT === "prod" ? ".env.production" : ".env",
});

const app = express();

app.use(express.json());

app.use(router);

connectDb();

app.get("/", (request, response) => {
  return response.status(200).json({ message: "Welcome to the Chat" });
});

// app.use(catchErrors);

export { app };

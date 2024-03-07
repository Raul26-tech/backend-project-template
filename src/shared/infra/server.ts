import "reflect-metadata";
import { app } from "./app";

const PORT = process.env.SERVER_PORT;
console.log(PORT);

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", () => {
    console.log("Failure an unexpected error occurred");
  });

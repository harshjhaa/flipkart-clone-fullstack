import express from "express";
import dotenv from "dotenv";
import mongoDbConnection from "./database/db.js";
import defaultData from "./defaultData.js";

dotenv.config();
const app = express();

//connecting with mongoDB
mongoDbConnection(process.env.MONGO_DB_USERNAME, process.env.MONGO_DB_PASSWORD);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port %%%% ${port} %%%%`);
});

// defaultData();

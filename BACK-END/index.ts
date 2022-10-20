import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import { ConnectDB } from "./src/models/schemas/ConnectDB";
import Router from "./src/router/user.router";

const PORT = 8080;

const app = express();
app.use(cors());

app.set("view engine", "ejs");

app.set("views", "./src/views");

const db = new ConnectDB();
db.connect()
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(bodyParser.json());

app.use("/admin", Router);

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});

import express from "express";
import mongoose from "mongoose";
import route from "./routes/userRoute.js";
import bodyParser from "body-parser"
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("db connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

  
  app.use("/api", route)
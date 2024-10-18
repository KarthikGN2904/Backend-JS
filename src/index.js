//require("dotenv").config({ path: "./.env" });
import dotenv from "dotenv";

//import mongoose from "mongoose";
//import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed!!!: ", err);
  });

/*
import expreess from "express";
const app = expreess();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR CONNECTING TO DB", error);
    throw error;
  }
})();
*/

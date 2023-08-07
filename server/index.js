import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// ===============ROUTES===================
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
//=========================================

// server
const server = express();

// middleware
dotenv.config();
// json parser middleware
server.use(bodyParser.json({ limit: "20mb", extended: "true" }));
server.use(bodyParser.urlencoded({ limit: "20mb", extended: "true" }));
server.use(cors());

// routes
server.use("/auth", authRoute);
server.use("/user", userRoute);
server.use("/post", postRoute);

//db donnection
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to socialmedia_test database succesfully!");
  } catch (error) {
    console.log(error);
  }
};
dbConnection();

// Listening server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} succesfully!`);
});

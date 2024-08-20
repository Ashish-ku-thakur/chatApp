import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { databaseConnection } from "./middelware/databaseConnection.js";
import userRouter from "./routes/userRouter.js";
import massageRouter from "./routes/massageRouter.js";
import cookieParser from "cookie-parser";
import {app, server} from './socket/socket.js';

dotenv.config();
// let app = express();

// middelwares
let corsOption = {
  origin: process.env.HOST,
  credentials: true,
};

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/massage", massageRouter);

server.listen(process.env.PORT, () => {
  databaseConnection();
  console.log(`server started on port on 8000`);
});

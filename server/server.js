import express from "express";
import dotenv from "dotenv";
import Cors from "cors";
import connection from "./util/connection.js";
import SetupModels from "./models/setupmodels.js";
import APIRouter from "./routes/APIRouter.js";
import { Server } from "socket.io";
// socket = socket.io;
dotenv.config();
const app = express();

app.use(Cors());
app.use(express.json());

try {
  await SetupModels(connection);
  await connection.authenticate();
  await connection.sync();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
app.use(async (req, res, next) => {
  req.models = connection.models;
  next();
});
app.use("/", APIRouter);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening in http://127.0.0.1:${process.env.PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:3000",
  },
});

io.on(`connection`, (socket) => {
  console.log("connection..............................");
});

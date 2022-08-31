import express from "express";
import { createServer } from "http";
import cors from "cors";
import config from "../config/config";
import { Server } from "socket.io";
import userRoutes from "./router/user.router";
import morgan from "morgan";
import michiGameRouter from "./router/michiGame.router";
import router from "./router";
const app = express();
const corsOptions = {
  origin: config.origin,
};

//config app
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//router
app.use(userRoutes);
app.use(michiGameRouter);
app.use(router);

//http server
const httpServer = createServer(app);

const io = new Server(httpServer, { cors: { origin: config.origin } });
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
export default httpServer;

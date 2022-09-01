import express, { Application } from "express";
import { createServer } from "http";
import cors from "cors";
import config from "../config/config";
import { Server } from "socket.io";
import userRoutes from "./router/user.router";
import morgan from "morgan";
import michiGameRouter from "./router/michiGame.router";
import swaggerUi from "swagger-ui-express";
import swaggerSetup from "./docs/swagger";
const app: Application = express();
const corsOptions = {
  origin: config.origin,
};

//config app
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static("public"));
//router
app.use(userRoutes);
app.use(michiGameRouter);

//docs
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSetup);
});
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSetup));
//http server
const httpServer = createServer(app);

const io = new Server(httpServer, { cors: { origin: config.origin } });
io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
export default httpServer;

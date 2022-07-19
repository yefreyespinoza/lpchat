import { Router } from "express";
import {
  getMichiGameByUserId,
  getOneMichiGameUsernames,
  postNewMichiGame,
} from "../controllers/michiGame";

const michiGameRouter = Router();

michiGameRouter.post("/api/michi-game/", postNewMichiGame);
michiGameRouter.get("/api/michi-game/byuser/:userId", getMichiGameByUserId);
michiGameRouter.get(
  "/api/michi-game/withusernames/:gameId",
  getOneMichiGameUsernames
);
export default michiGameRouter;

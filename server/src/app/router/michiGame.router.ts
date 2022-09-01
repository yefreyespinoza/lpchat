import { Router } from "express";
import passport from "passport";
import {
  getMichiGameByUserId,
  getOneMichiGameUsernames,
  postNewMichiGame,
} from "../controllers/michiGame";

const michiGameRouter = Router();
/**
 * Post track
 * @openapi
 * /api/michi-game/:
 *    post:
 *      tags:
 *        - michi-game
 *      summary: "for create a new game MichiGame"
 *      description: this endpoint is for create a new michi game.
 *      parameters:
 *      - token:
 *          in: header
 *          description: token of authentication
 *          required: true
 *      responses:
 *        '200':
 *          description: return object with MichiGame succesfull created
 *        '404':
 *          description: Error of validation
 */
michiGameRouter.post(
  "/api/michi-game/",
  passport.authenticate("jwt", { session: false }),
  postNewMichiGame
);

/**
 * Post track
 * @openapi
 * /api/michi-game/byuser:
 *    get:
 *      tags:
 *        - michi-game
 *      summary: "return all games for userId"
 *      description: this endpoint is for get michi-game's by userId.
 *      responses:
 *        '200':
 *          description: return list of games of michi-game category by userId.
 *        '422':
 *          description: Error of validation
 */
michiGameRouter.get(
  "/api/michi-game/byuser",
  passport.authenticate("jwt", { session: false }),
  getMichiGameByUserId
);

/**
 * Post track
 * @openapi
 * /api/michi-game/withusernames/:gameId:
 *    get:
 *      tags:
 *        - michi-game
 *      summary: "return a game with usernames of the game"
 *      description: This endpoint is fore get michi-game with usernames.
 *      responses:
 *        '200':
 *          description: return game of type michi with usernames.
 *        '404':
 *          description: server error
 */
michiGameRouter.get(
  "/api/michi-game/withusernames/:gameId",
  passport.authenticate("jwt", { session: false }),
  getOneMichiGameUsernames
);
export default michiGameRouter;

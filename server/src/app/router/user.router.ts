import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user";

const userRoutes = Router();

/**
 * Post track
 * @openapi
 * /users/register:
 *    post:
 *      tags:
 *          - users
 *      summary: "this route is for register a new user"
 *      description: this endpoint is for register users
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/user"
 *      responses:
 *          '200':
 *              description: new user register successfull
 *          '404':
 *              description: server internal error
 *
 */
userRoutes.post("/users/register", registerUser);

/**
 * Post track
 * @openapi
 * /users/login:
 *    post:
 *      tags:
 *          - users
 *      summary: "this route is for authentica a exists user"
 *      description: this endpoint is for authenticat a exists user
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/user"
 *      responses:
 *          '200':
 *              description: successfull users authenticate
 *          '404':
 *              description: internal server ocurred
 *
 */
userRoutes.post("/users/login", loginUser);

export default userRoutes;

import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user";

const userRoutes = Router();

userRoutes.post("/users/register", registerUser);
userRoutes.post("/users/login", loginUser);

export default userRoutes;

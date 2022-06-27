import { RequestHandler } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../../config/config";
import "./../auth/auth";
//register controller
export const registerUser: RequestHandler = (req, res, next) => {
  try {
    passport.authenticate("signup", (err, user, info) => {
      if (err) return next(err);
      if (!user) return res.status(501).json(info);
      req.logIn(user, { session: false }, async (err) => {
        if (err) return next(err);
        const token = jwt.sign({ id: user.id }, config.JWT_KEY);
        return res.status(200).json({
          auth: true,
          token,
        });
      });
    })(req, res, next);
  } catch (e) {
    console.error(
      "[user.controller][registeruser][error]",
      typeof e === "object" ? JSON.stringify(e) : e
    );
    res.status(404).json("server error 404");
  }
};

//login controller
export const loginUser: RequestHandler = (req, res, next) => {
  try {
    passport.authenticate("login", (err, user, info) => {
      if (err) return next(err);
      if (!user)
        return res
          .status(501)
          .json({ message: "username or password invalid" });
      req.login(user, { session: false }, async (err) => {
        if (err) return next(err);
        const token = jwt.sign({ id: user.id }, config.JWT_KEY);
        return res.status(200).json({ token, auth: true });
      });
    })(req, res, next);
  } catch (e) {
    console.error(
      "[user.controller][loginUser][Error]",
      typeof e === "object" ? JSON.stringify(e) : e
    );
  }
};

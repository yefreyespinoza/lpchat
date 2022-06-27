import passport from "passport";
import { Strategy } from "passport-local";
import passport_jwt, { ExtractJwt } from "passport-jwt";
import {
  createNewUser,
  findUserByUsername,
  validatePassword,
} from "../models/User";
import config from "../../config/config";

const JWTStrategy = passport_jwt.Strategy;

//singup passport
passport.use(
  "signup",
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        createNewUser({ username, password }, (err, user) => {
          if (err || !user)
            return done(null, null, { message: "username not available" });
          return done(null, user);
        });
      } catch (e) {
        done(e);
      }
    }
  )
);

//login passport
passport.use(
  "login",
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      try {
        findUserByUsername(username, async (e, user) => {
          if (e || !user) return done(e, null, { message: "user not found" });
          const isValid = await validatePassword(password, user.password);
          if (!isValid)
            return done(null, null, {
              message: "password not match with your account",
            });
          return done(null, user);
        });
      } catch (e) {
        done(e);
      }
    }
  )
);

//authtenticate with JSON WEB TOKENS
passport.use(
  new JWTStrategy(
    {
      secretOrKey: config.JWT_KEY,
      jwtFromRequest: ExtractJwt.fromHeader("x-access-token"),
    },
    async (token, done) => {
      try {
        return done(null, token.id);
      } catch (e) {
        done(e);
      }
    }
  )
);

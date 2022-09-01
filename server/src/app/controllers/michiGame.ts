import { RequestHandler } from "express";
import {
  createNewMichiGame,
  findMichiGameByUserId,
  findOneMIchiGameWithUsernames,
} from "../models/MichiGame";
import { MichiGameStart } from "../types/MichiGame";

export const postNewMichiGame: RequestHandler = (req, res, next) => {
  try {
    const id: any = req.user;
    const game: MichiGameStart = {
      hostId: id,
      gameName: req.body.gameName,
    };
    createNewMichiGame(game, (err, game) => {
      if (err) return res.status(501).json({ message: err });
      return res.status(200).json(game);
    });
  } catch (e) {
    res.status(501).json({ message: "server error" });
    console.error(
      "[controller.michiGame][postNewMichiGame][error]",
      typeof e === "object" ? JSON.stringify(e) : e
    );
  }
};

export const getMichiGameByUserId: RequestHandler = (req, res, next) => {
  try {
    const id: any = req.user;
    findMichiGameByUserId(parseInt(id), (err, games) => {
      if (err) return res.status(501).json({ messge: err });
      return res.status(200).json(games);
    });
  } catch (e) {
    res.status(501).json({ message: "server error" });
    console.error(
      "[controller.michiGame][getMichiGameByUserId][error]",
      typeof e === "object" ? JSON.stringify(e) : e
    );
  }
};

export const getOneMichiGameUsernames: RequestHandler = (req, res, next) => {
  try {
    const id: any = req.user;
    findOneMIchiGameWithUsernames(parseInt(id), (err, game) => {
      if (err) return res.status(501).json({ message: err });
      return res.status(200).json(game);
    });
  } catch (e) {
    res.status(501).json({ message: "server error" });
    console.error(
      "[controller.michiGame][getOneMichiGameUsernames][error]",
      typeof e === "object" ? JSON.stringify(e) : e
    );
  }
};

export default class MichiGameController {
  public getOneMichiGameById() {}
}

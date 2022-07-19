import configApp from "../config";
import { NewMichiGame } from "./../types/game";
const apiMichiGame = configApp.api_uri + "/new";
export const createNewGameTable = async (game: NewMichiGame, token: string) => {
  const res = await fetch(apiMichiGame, {
    headers: {
      "x-access-token": token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(game),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

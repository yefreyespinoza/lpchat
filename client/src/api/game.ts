import configApp from "../config";
import { NewMichiGame } from "./../types/game";
const apiMichiGame = configApp.api_uri + "/api/michi-game";
export const createNewGameTable = async (game: NewMichiGame, token: string) => {
  const res = await fetch(apiMichiGame, {
    method: "POST",
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

export const getMichiGamesByUserId = async (token: string) => {
  const res = await fetch(apiMichiGame + "/byUser", {
    headers: { "x-access-token": token },
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const getMichiGameById = async (game: any, token: string) => {
  const res = await fetch(apiMichiGame);
  return {
    status: res.status,
    data: await res.json(),
  };
};

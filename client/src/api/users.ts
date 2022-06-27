import configApp from "../config";
import { User } from "./../types/user";

const userApi = configApp.api_uri + "/users";
export const registerNewUser = async (user: User) => {
  const res = await fetch(userApi + "/register", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return {
    status: res.status,
    data: await res.json(),
  };
};

export const loginUser = async (user: User) => {
  const res = await fetch(userApi + "/login", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return { status: res.status, data: await res.json() };
};

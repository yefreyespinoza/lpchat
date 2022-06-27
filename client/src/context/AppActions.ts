import { Dispatch } from "react";
import { ActionsTypes, ActionType, AuthI } from "./types";

export const validateUsername = (
  username: string,
  cb: (err: string | null) => void
) => {
  if (!username) return cb("* username is required");
  if (username.length < 3)
    return cb("* username must be at least 3 characters logn");
  if (username.length > 50)
    return cb("* username must be less than 50 characters");
  const re = /^[a-zA-Z0-9_]+$/;
  if (!re.test(username))
    return cb("* Username must contain only letters, numbers, and underscores");
  return cb(null);
};

export const validatePassword = (
  password: string,
  cb: (err: string | null) => void
) => {
  if (!password) return cb("* password is required");
  if (password.length < 8)
    return cb("* password must be at least 8 characters");
  if (password.length > 50)
    return cb("* password must be less than 50 characters");
  return cb(null);
};

export const comparePassword = (password: string, repeatPassword: string) =>
  password !== repeatPassword ? false : true;

//actions for state
export const addToken = (
  token: string,
  dispatch: Dispatch<ActionType<AuthI>>
) => {
  dispatch({
    type: ActionsTypes.USER_AUTH,
    payload: { auth: true, token, loading: false },
  });
};
export const noTokenProvider = (dispatch: Dispatch<ActionType<AuthI>>) => {
  dispatch({
    type: ActionsTypes.USER_AUTH,
    payload: { auth: false, token: "", loading: false },
  });
};
export const removeToken = (dispatch: Dispatch<ActionType<AuthI>>) => {
  dispatch({
    type: ActionsTypes.USER_AUTH,
    payload: { auth: false, token: "", loading: false },
  });
};

import { Dispatch } from "react";

export enum ActionsTypes {
  USER_AUTH = "USER_AUTH",
}
export interface AuthI {
  loading: boolean;
  token: string;
  auth: boolean;
}
export interface AppActionI {
  type: ActionsTypes;
  payload: any;
}
export interface ActionType<Type> {
  type: ActionsTypes;
  payload: Type;
}
export interface AppStateI {
  dispatch: Dispatch<AppActionI>;
  auth: AuthI;
}

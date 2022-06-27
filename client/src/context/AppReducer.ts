import { ActionsTypes, AppActionI, AppStateI } from "./types";

const AppReducer = (state: AppStateI, action: AppActionI): AppStateI => {
  const { type, payload } = action;
  switch (type) {
    case ActionsTypes.USER_AUTH: {
      return { ...state, auth: payload };
    }
    default:
      return { ...state };
  }
};

export default AppReducer;

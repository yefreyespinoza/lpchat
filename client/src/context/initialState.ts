import { AppStateI } from "./types";

const initialStateApp: AppStateI = {
  dispatch: () => {},
  auth: {
    loading: true,
    token: "",
    auth: false,
  },
};

export default initialStateApp;

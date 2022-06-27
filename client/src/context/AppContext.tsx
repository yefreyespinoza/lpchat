import { createContext } from "react";
import initialStateApp from "./initialState";

const AppContext = createContext(initialStateApp);

export default AppContext;

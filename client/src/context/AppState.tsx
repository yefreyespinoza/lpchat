import { ReactNode, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import Cookies from "universal-cookie";
import initialStateApp from "./initialState";
import { addToken, noTokenProvider } from "./AppActions";

const AppState = ({ children }: { children: ReactNode }) => {
  const cookies = new Cookies();
  const [state, dispatch] = useReducer(AppReducer, initialStateApp);
  useEffect(() => {
    const auth = cookies.get("auth");
    if (auth) return addToken(auth.token, dispatch);
    return noTokenProvider(dispatch);
    //eslint-disable-next-line
  }, []);
  return (
    <AppContext.Provider value={{ auth: state.auth, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;

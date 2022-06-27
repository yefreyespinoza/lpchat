import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../api/users";
import { addToken } from "../../context/AppActions";
import AppContext from "../../context/AppContext";
import { User } from "./../../types/user";
import Cookies from "universal-cookie";
import "./login.css";

//component
function Login() {
  //state Login component
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [serverError, setServerError] = useState("");
  const { dispatch } = useContext(AppContext);
  const cookies = new Cookies();

  //change username
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError("");
    setUser({ ...user, username: e.target.value });
  };

  //chanage password
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError("");
    setUser({ ...user, password: e.target.value });
  };

  //login action
  const loginAction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await loginUser(user);
    if (res.status !== 200) return setServerError(res.data.message);
    addToken(res.data.token, dispatch);
    cookies.set("auth", JSON.stringify(res.data), { path: "/" });
  };

  //render component
  return (
    <div className="w-mobile ">
      <form onSubmit={loginAction} className="form-auth">
        {/* form head  */}
        <div className="form-head">
          <h3>
            <i>The best place</i>
          </h3>
        </div>

        {/* username input  */}
        <div className="form-auth-group">
          <label className="form-auth-label" htmlFor="username">
            username
          </label>
          <input
            placeholder="enter your username"
            className="form-auth-input"
            type="text"
            id="username"
            onChange={onChangeUsername}
            value={user.username}
          />
        </div>

        {/* password input  */}
        <div className="form-auth-group">
          <label className="form-auth-label" htmlFor="username">
            password
          </label>
          <input
            placeholder="enter your password"
            className="form-auth-input"
            value={user.password}
            onChange={onChangePassword}
            type="password"
            id="password"
          />
        </div>

        {/* server error  */}
        <div className="login__server-error">
          <span>{serverError ? `* ${serverError}` : ""}</span>
        </div>

        {/* forgot password ? */}
        <div className="form-auth-group">
          <a className="forgot-pass" href="#2">
            forgot password?
          </a>
        </div>

        {/* button login action  */}
        <div className="form-auth-group btn-auth">
          <input type="submit" value={"login"} id="login-submit" />
        </div>

        {/* form footer  */}
        <div className="form-footer">
          <p>
            if you don't have an account, <Link to="/register">register</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

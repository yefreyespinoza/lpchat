import React, { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { registerNewUser } from "../../api/users";
import {
  addToken,
  comparePassword,
  validatePassword,
  validateUsername,
} from "../../context/AppActions";
import AppContext from "../../context/AppContext";
import { UserRegister } from "../../types/user";
import "./register.css";

//component
function Register() {
  //registe state
  const cookies = new Cookies();
  const { dispatch } = useContext(AppContext);
  const [user, setUser] = useState<UserRegister>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [serverError, setServerError] = useState("");
  const [inputsErrors, setInputsErrors] = useState({
    usernameError: "",
    passwordError: "",
  });
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);

  //register user
  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await registerNewUser(user);
    if (res.status !== 200) {
      return setServerError(res.data.message);
    }
    addToken(res.data.token, dispatch);
    cookies.set("auth", JSON.stringify(res.data), {
      path: "/",
    });
  };

  //change username
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError("");
    setUser({ ...user, username: e.target.value });
    validateUsername(e.target.value, (e) => {
      if (!e) return setInputsErrors({ ...inputsErrors, usernameError: "" });
      return setInputsErrors({ ...inputsErrors, usernameError: e });
    });
  };

  //change password
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: e.target.value });
    setServerError("");
    validatePassword(e.target.value, (err) => {
      if (!err) return setInputsErrors({ ...inputsErrors, passwordError: "" });
      setInputsErrors({ ...inputsErrors, passwordError: err });
    });
  };

  //change confirm password
  const onChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServerError("");
    setUser({ ...user, confirmPassword: e.target.value });
  };

  //compare pass
  const isPassMatch = comparePassword(user.confirmPassword, user.password);

  //component render
  return (
    <div className="w-mobile">
      <form onSubmit={registerUser} className="form-auth">
        {/* form head  */}
        <div className="form-head">
          <h3>
            <i>The best place</i>
          </h3>
        </div>

        {/* username form auth  */}
        <div className="form-auth-group">
          <label className="form-auth-label" htmlFor="username">
            username
          </label>
          <input
            onChange={onChangeUsername}
            value={user.username}
            autoComplete="off"
            placeholder="enter your username"
            className="form-auth-input"
            type="text"
            id="username"
          />
          <span className="register__input-error">
            {inputsErrors.usernameError}
          </span>
        </div>

        {/* password form group  */}
        <div className="form-auth-group">
          <label className="form-auth-label" htmlFor="username">
            password
          </label>
          <input
            onChange={onChangePassword}
            value={user.password}
            placeholder="enter your password"
            className="form-auth-input"
            type="password"
            id="password"
          />
          <span className="register__input-error">
            {inputsErrors.passwordError}
          </span>
        </div>

        {/* confirm password form group  */}
        <div className="form-auth-group">
          <label className="form-auth-label" htmlFor="username">
            confirm password
          </label>
          <input
            onChange={onChangeConfirmPassword}
            placeholder="confirm your password"
            className="form-auth-input"
            type="password"
            id="confirm_password"
          />
          <span className="register__input-error">
            {!isPassMatch ? "* passwords not matches" : ""}
          </span>
        </div>

        {/* server error   */}
        <div className="register__server-error">
          <span>{serverError ? `* ${serverError} ` : ""}</span>
        </div>

        {/* accept terms form group  */}
        <div className="form-auth-group">
          <div className="register__terms">
            <input
              name="register-checkbox"
              defaultChecked={isCheckedTerms}
              type={"checkbox"}
              className={
                !isCheckedTerms
                  ? "register__checkbox"
                  : "register__checkbox register__checkbox-checked-bg"
              }
              onChange={() => setIsCheckedTerms(!isCheckedTerms)}
            />
            <div>
              accept <a href="#terms">terms</a> and{" "}
              <a href="#conditions">conditions</a>
            </div>
          </div>
        </div>

        {/* button  send form */}
        <div className="form-auth-group btn-auth">
          <input type="submit" value={"Register"} id="login-submit" />
        </div>

        {/* form footer  */}
        <div className="form-footer">
          <p>
            if you have an account, <Link to="/login">login</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;

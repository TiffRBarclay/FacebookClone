import React from "react";
import "./Login.css";
import FacebookLogo from "./Images/hiclipart.com.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img src={FacebookLogo} alt="" />
        <img
          src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview-400x400.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;

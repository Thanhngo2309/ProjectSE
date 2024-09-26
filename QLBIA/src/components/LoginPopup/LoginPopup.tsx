import { useState } from "react";
import "./LoginPopup.css";
import cross_icon from "../../assets/icons8-cross-50.png";
interface LoginPopupProps {
  setShowLogin: (show: boolean) => void;
}

const LoginPopup = ({ setShowLogin }: LoginPopupProps) => {
  const [currState] = useState("Sign up");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popop-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setShowLogin(false);
            }}
            src={cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="Password" placeholder="Your password" required />
        </div>
        <button>{currState === "Sign up" ? "Create account" : "login"}</button>
      </form>
    </div>
  );
};

export default LoginPopup;

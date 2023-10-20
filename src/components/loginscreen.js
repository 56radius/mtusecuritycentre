import React from "react";
import { useNavigate } from "react-router-dom";

import ".././css/loginscreen.css";
import logo from ".././images/logo.png";

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="left">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: 500,
            height: 400,
          }}
        />
      </div>
      <div className="right">
        <h2>Mtu Security Centre</h2>
        <form>
          <div className="form-group">
            <label htmlFor="staffId">Staff ID</label>
            <input type="text" id="staffId" name="staffId" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;

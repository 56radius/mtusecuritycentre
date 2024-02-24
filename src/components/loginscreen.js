import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from ".././images/logo.png";
import ".././css/loginscreen.css";

function LoginScreen() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Simulate a login request
      const response = await fetch(
        "https://python-security-system.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: "meritmohammed@gmail.com",
            password: "123456789",
          }),
        }
      );

      if (response.ok) {
        // Login successful
        navigate("/home");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome to Mtu Security Centre!",
        });
      } else {
        // Login failed
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      // Error during login
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "An error occurred during login. Please try again later.",
      });
      console.error("Error during login:", error);
    }
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
            <label htmlFor="staffId">Email</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          <h3> create account? </h3>
        </form>
      </div>
    </div>
  );
}

export default LoginScreen;

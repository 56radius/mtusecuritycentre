import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import Swal from "sweetalert2"; // Import SweetAlert2 for alerts
import ".././css/loginscreen.css";

function SignupScreen() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://python-security-system.onrender.com/user/signup",
        formData
      );

      console.log("Signup successful", response.data);

      // Show success message with SweetAlert2
      Swal.fire({
        icon: "success",
        title: "Signup Successful",
        text: "You have successfully signed up.",
        confirmButtonText: "Go to Dashboard",
        onClose: () => {
          // Redirect to dashboard or any other page after success
          // You can use React Router's useHistory hook here
          // Example: history.push("/dashboard");
        },
      });
    } catch (error) {
      console.error("Signup failed", error);
      // Show error message with SweetAlert2
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: "Failed to sign up. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div
      className="login-container"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="right">
        <h2>Mtu Security Centre</h2>
        <form
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Create</button>
          <h3>Already have an account? Login</h3>
        </form>
      </div>
    </div>
  );
}

export default SignupScreen;

import React from "react";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ".././css/homescreen.css";

// Importing images
import FirstThumbnail from ".././images/logo.png";

function HomeScreen() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Security System Admin Panel</h1>
        <div className="switch-container">
          <h2>
            System is <span style={{ color: "red" }}>Armed</span>
          </h2>
          <Switch color="secondary" />
        </div>
      </div>

      <div className="card">
        <button
          onClick={() => navigate("/video")}
          style={{
            width: "22%",
            background: "transparent",
          }}
        >
          <div className="imageCover">
            <img
              src={FirstThumbnail}
              alt="thumbnail"
              style={{
                width: 100,
                height: 50,
              }}
            />
          </div>
        </button>
        <p
          style={{ fontWeight: "bold", marginBottom: "30" }}
          className="text-content"
        >
          Person Mode detected
        </p>
        <p style={{ marginBottom: 0 }} className="text-content">
          July 4, 2023 @ 4:45pm
        </p>
      </div>
    </div>
  );
}

export default HomeScreen;

import React from "react";
import Switch from "@mui/material/Switch";
import ".././css/homescreen.css";

// Importing images
import FirstThumbnail from ".././images/logo.png";

function HomeScreen() {
  return (
    <div className="container">
      <div className="title">
        <h1>Security System Admin Panel</h1>
        <div className="switch-container">
          <h2>System is Armed</h2>
          <Switch color="primary" />
        </div>
      </div>

      <div className="card">
        <button style={{ 
          width: "22%", 
          background: "transparent" 
          }}>
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
        <p className="text-content">Person Mode detected</p>
        <br />
        <p className="text-content"> July 4 2023 @ 4:45pm </p>
      </div>
    </div>
  );
}

export default HomeScreen;

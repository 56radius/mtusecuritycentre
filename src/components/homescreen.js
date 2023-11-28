import React from "react";
import Switch from "@mui/material/Switch";
import ".././css/homescreen.css";

// Importing images
import FirstThumbnail from ".././images/logo.png";

function HomeScreen() {
  return (
    <div>
      <div
        className="title"
        style={{
          flexDirection: "column",
        }}
      >
        <h1>Security System Admin Panel</h1>
        <div className="switch" style={{ flexDirection: "row" }}>
          <h2>System is Armed</h2>
          <Switch color="primary" />
        </div>
      </div>

      <div className="card">
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
        <p className="text-content">Person Mode detected</p>
      </div>
    </div>
  );
}

export default HomeScreen;

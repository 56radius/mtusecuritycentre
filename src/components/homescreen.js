import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ".././css/homescreen.css";

// Importing images
import FirstThumbnail from ".././images/logo.png";

function HomeScreen() {
  const navigate = useNavigate();
  const [isArmed, setIsArmed] = useState(false);

  const handleSwitchToggle = () => {
    setIsArmed((prevIsArmed) => !prevIsArmed);
  };

  return (
    <div className="container" style={{ paddingBottom: "20px" }}>
      {/* Adjusted paddingBottom */}
      <div className="title">
        <h1>Security System Admin Panel</h1>
        <div
          className={`switch-container ${
            isArmed ? "switch-container-red" : ""
          }`}
        >
          <h2>
            System is{" "}
            <span style={{ color: isArmed ? "red" : "inherit" }}>Armed</span>
          </h2>
          <Switch
            sx={{
              "& .MuiSwitch-thumb": {
                color: "red",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "red",
              },
            }}
            checked={isArmed}
            onChange={handleSwitchToggle}
          />
        </div>
      </div>
      {/* logs text and nummber list  
      <div style={{ flexDirection: "row" }} className="logs">
        <h2>Logs</h2>
      </div>
      <div className="helo">
        <h2>Helo</h2>
      </div> */}
      {/* Card for motion detection */}
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

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
                width: 20,
                height: 20,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
              },
              "& .MuiSwitch-track": {
                borderRadius: 20,
                backgroundColor: "#D6D6D6",
              },
              "& .Mui-checked .MuiSwitch-thumb": {
                backgroundColor: "red", // iOS blue color
              },
              "& .Mui-checked .MuiSwitch-track": {
                backgroundColor: "red",
              },
            }}
            checked={isArmed}
            onChange={handleSwitchToggle}
          />
        </div>
      </div>

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
        <div className="text-content">
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "30px",
              fontSize: "150%",
            }}
          >
            Person Mode detected
          </p>
          <p style={{ marginBottom: "10px" }}>July 4, 2023 @ 4:45pm</p>
        </div>
      </div>

      {/* second Card for motion detection */}
    </div>
  );
}

export default HomeScreen;

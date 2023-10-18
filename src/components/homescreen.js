import React from "react";

//importing css file code
import ".././css/homescreen.css";

function homescreen() {
  return (
    <div>
      {/* title and switch */}
      <div
        style={{
          jsutifyContent: "center",
        }}
        className="title"
      >
        <h1> Security System Admin Panel </h1>

        {/* the switch */}
        <div className="switch">
          <h2> The switch </h2>
        </div>
      </div>

      {/* Logs, thumbnails for the video */}
      <div className="logCards">
        <p> This is my log </p>
        <div></div>
      </div>
    </div>
  );
}

export default homescreen;

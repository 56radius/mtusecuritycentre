import React from "react";
import ".././css/homescreen.css";

//importing images
import FirstThumbnail from ".././images/logo.png";

function HomeScreen() {
  return (
    <div>
      <div className="title">
        <h1>Security System Admin Panel</h1>
        <div className="switch">
          <h2>System is Armed</h2>
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
        <p className="text-content">This is your card content.</p>
      </div>
    </div>
  );
}

export default HomeScreen;

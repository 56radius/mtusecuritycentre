import React from "react";
import ".././css/homescreen.css";

//importing images

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
        <p>This is your card content.</p>
      </div>
    </div>
  );
}

export default HomeScreen;

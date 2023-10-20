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
        <h1>Security System Admin Panel</h1>

        {/* the switch */}
        <div className="switch">
          <h2> System is Armed </h2>
        </div>
      </div>

      {/* Logs 
      <div className="logs">
        <h2> Logs </h2>

        <div>
          <h2> 300 </h2>
        </div>
      </div>
      */}

      <div className="logCards">
        {/* first card */}
        <div className="cards">
          <h2> hello </h2>
        </div>

        {/* second card */}
      </div>
    </div>
  );
}

export default homescreen;

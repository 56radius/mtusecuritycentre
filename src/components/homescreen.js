import React from "react";

function homescreen() {
  return (
    <div>
      {/* title and switch */}
      <div className="title">
        <h1> Security System Admin Panel </h1>
      </div>

      {/* Logs, thumbnails for the homescreen */}
      <div className="logCards">
        <p> This is my log </p>
      </div>
    </div>
  );
}

export default homescreen;

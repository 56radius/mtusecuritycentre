import React, { useEffect, useState } from "react";
import ".././css/SplashScreen.css";

//importing logo
import logo from ".././images/logo.png";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default SplashScreen;

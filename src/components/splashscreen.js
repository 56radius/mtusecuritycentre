import React, { useEffect, useState } from "react";
import ".././css/SplashScreen.css";

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
      <p> WELCOME TO MTU SECURITY CENTRE </p>
    </div>
  );
}

export default SplashScreen;

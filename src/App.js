import React, { useState, useEffect } from "react";
import SplashScreen from "./components/splashscreen";
import HomeScreen from "./components/homescreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">{showSplash ? <SplashScreen /> : <HomeScreen />}</div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/splashscreen";
import LoginScreen from "./components/loginscreen";
import SignupScreen from "./components/signupscreen";
import HomeScreen from "./components/homescreen";
import ShowVideoScreen from "./components/showvideoscreen";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={showSplash ? <SplashScreen /> : <LoginScreen />}
          />
          <Route path="/register" element={<SignupScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/video" element={<ShowVideoScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

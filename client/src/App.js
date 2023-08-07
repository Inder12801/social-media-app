import React, { useState } from "react";
import "./App.css";
import theme from "./theme";
import { Box, Button, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import DummyComp from "./store/DummyComp";
function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div
          className="blur"
          style={{
            top: "-20%",
            right: "0",
          }}
        ></div>
        <div
          className="blur"
          style={{
            top: "15%",
            left: "-15%",
          }}
        ></div>
        {/* <Home /> */}
        {/* <Profile /> */}
        {isSignUp ? <Signup /> : <Login setIsSignUp={setIsSignUp} />}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <DummyComp /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

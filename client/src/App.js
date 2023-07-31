import React from "react";
import "./App.css";
import theme from "./theme";
import { Box, Button, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
function App() {
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
        <Signup />
        {/* <Login /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;

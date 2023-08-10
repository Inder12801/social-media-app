import React, { useState } from "react";
import "./App.css";
import theme from "./theme";
import { Box, Button, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const [isSignUp, setIsSignUp] = useState(true);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
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
        {/* {isSignUp ? <Signup setIsSignUp={setIsSignUp} /> : <Login />} */}
        {/* <Signup /> */}
        {/* <Login /> */}
        {/* <DummyComp /> */}
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="../auth" />}
          />

          <Route
            path="/auth"
            element={user ? <Navigate to="../home" /> : <Signup />}
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

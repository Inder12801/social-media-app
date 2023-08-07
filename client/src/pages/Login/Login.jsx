import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, Stack } from "@mui/material";
import tangerineLogo from "../../img/tangerine_logo.png";
import { signupBtnStyle } from "../Signup/Signup";

const textFieldStyle = {
  bgcolor: " #ebba771a",
  color: "#28343e12",
  fontFamily: "Inter",
  width: "80%",
};

const Login = ({ setIsSignUp }) => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.value);
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);

    // Clear the form
    setLoginFormData({
      username: "",
      password: "",
    });
  };
  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      {/* Left Side */}
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          <img src={tangerineLogo} alt="Logo" width="200" height="200" />
          <Typography
            mt={"3rem"}
            variant="h1"
            fontWeight={"600"}
            fontFamily={"Edu SA Beginner"}
            gutterBottom
          >
            Tangerine
          </Typography>
        </Stack>
        <Typography variant="body1" fontSize={"1.6rem"} fontWeight={"500"}>
          Welcome to our app! Sign up to get started.
        </Typography>
      </Grid>

      {/* Right Side */}
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <form
          style={{
            width: "80%",
            background: "#ffffffa3",
            padding: "40px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderRadius: "30px",
          }}
          onSubmit={handleSubmit}
        >
          <Typography textAlign={"center"} fontSize={"2rem"} fontWeight={"600"}>
            Login
          </Typography>
          <Stack
            direction={"column"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <TextField
              label="Username"
              variant="outlined"
              name="username"
              fullWidth
              margin="normal"
              required
              sx={textFieldStyle}
              value={loginFormData.username}
              onChange={handleChange}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={textFieldStyle}
              value={loginFormData.password}
              onChange={handleChange}
            />
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={signupBtnStyle}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            mt={2}
            textAlign={"center"}
            sx={{ fontSize: "1rem" }}
          >
            Don't have an account?{" "}
            <Link href="/signup" color="primary">
              Signup
            </Link>
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;

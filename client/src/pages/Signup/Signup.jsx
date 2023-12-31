import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert, Link, Snackbar, Stack } from "@mui/material";
import logo from "../../img/logo.png";
import tangerineLogo from "../../img/tangerine_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess } from "../../store/slices/authSlice";

const textFieldStyle = {
  bgcolor: " #ebba771a",
  color: "#28343e12",
  fontFamily: "Inter",
  margin: "auto",
};
export const signupBtnStyle = {
  width: "50%",
  margin: "auto",
  background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
  borderRadius: "30px",
  border: "2px solid transparent",
  fontSize: "1.2rem",
  "&:hover": {
    background: "transparent",
    color: "#f95f35",
    border: "2px solid #f95f35",
  },
};

const Signup = ({ setIsSignUp }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const [signupFormData, setSignupFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [samePass, setSamePass] = useState(false);
  const [open, setOpen] = useState(false);

  console.log("Loading is : ", loading);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Handle change
  const handleChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };
  // Reset Form
  const resetForm = () => {
    setSignupFormData({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(signupFormData);
    // Check if passwords match
    if (signupFormData.password !== signupFormData.confirmPassword) {
      handleOpen();
      resetForm();
      return;
    }
    setSamePass(false);
    // Dispatch signupSuccess
    dispatch(signupSuccess(signupFormData));

    // Open snackbar

    // Clear the form
    resetForm();
    // setIsSignUp(false);
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
            Sign Up
          </Typography>
          <Stack direction={"row"} width={"100%"} display={"flex"} gap={1}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={textFieldStyle}
              name="firstname"
              onChange={handleChange}
              value={signupFormData.firstname}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={textFieldStyle}
              name="lastname"
              onChange={handleChange}
              value={signupFormData.lastname}
            />
          </Stack>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyle}
            name="email"
            onChange={handleChange}
            value={signupFormData.email}
          />
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={textFieldStyle}
            name="username"
            onChange={handleChange}
            value={signupFormData.username}
            autoComplete="off"
          />
          <Stack
            direction={"row"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
          >
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={textFieldStyle}
              name="password"
              onChange={handleChange}
              value={signupFormData.password}
            />
            <TextField
              label={!samePass ? "Confirm Password" : "error"}
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              sx={textFieldStyle}
              name="confirmPassword"
              onChange={handleChange}
              value={signupFormData.confirmPassword}
            />
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                Password do not match!
              </Alert>
            </Snackbar>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={signupBtnStyle}
          >
            Sign Up
          </Button>
          <Typography
            variant="body2"
            mt={2}
            textAlign={"center"}
            sx={{ fontSize: "1rem" }}
          >
            Already have an account? Login
          </Typography>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;

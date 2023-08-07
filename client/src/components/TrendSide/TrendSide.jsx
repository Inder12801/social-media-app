import React from "react";
import NavIcons from "./NavIcons/NavIcons";
import TrendSection from "./TrendSection/TrendSection";
import { Button, Stack } from "@mui/material";
import { signupBtnStyle } from "../../pages/Signup/Signup";

export const btnStyle = {
  width: "80%",
  margin: "0 auto",
  background: "linear-gradient(98.63deg, #f9a225 0%, #f95f35 100%)",
  fontSize: "1.0rem",
  fontWeight: "600",
  border: "2px solid transparent",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "transparent",
    color: "primary.main",
    border: "2px solid #fca61f",
  },
};

const TrendSide = () => {
  return (
    <Stack direction={"column"} width={"100%"} borderRadius={"30px"} gap={4}>
      <NavIcons />
      <TrendSection />
      <Button
        variant="contained"
        color="primary"
        size={"large"}
        sx={{ ...signupBtnStyle, width: "80%" }}
      >
        Share
      </Button>
    </Stack>
  );
};

export default TrendSide;

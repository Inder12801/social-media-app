import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import ProfileSide from "../../components/ProfileSide/ProfileSide";

const Home = () => {
  return (
    <Stack
      display={"flex"}
      direction="row"
      width={"100%"}
      // bgcolor={"green"}
      spacing={4}
      gap={2}
      padding={"1rem"}
    >
      <ProfileSide />
      <Box width={"42%"}>Profile</Box>
      <Box width={"20%"}>Profile</Box>
    </Stack>
  );
};

export default Home;

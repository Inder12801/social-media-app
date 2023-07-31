import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import TrendSide from "../../components/TrendSide/TrendSide"

const Home = () => {
  return (
    <Stack
      display={"flex"}
      direction="row"
      width={"100%"}
      // bgcolor={"green"
      spacing={4}
      gap={1}
      padding={"1rem"}
    >
      <ProfileSide />
      <PostSide />
      <TrendSide />
    </Stack>
  );
};

export default Home;

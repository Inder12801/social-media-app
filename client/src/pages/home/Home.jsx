import { Box, Container, Grid, Stack } from "@mui/material";
import React from "react";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import TrendSide from "../../components/TrendSide/TrendSide";

const Home = () => {
  return (
    <Grid container spacing={2} p={2} bgcolor={"transparent"}>
      <Grid item xs={3} display={"flex"} flexDirection={"column"} gap={3}>
        {/* Content for the first column (1/4 of the width) */}
        <ProfileSide />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {/* Content for the second column (2/4 of the width) */}
        {/* You can place any content here */}
        {/* Example: <div>Column 2</div> */}
        <PostSide />
      </Grid>
      <Grid item xs={3} width={"100%"}>
        <TrendSide />
      </Grid>
    </Grid>
  );
};

export default Home;

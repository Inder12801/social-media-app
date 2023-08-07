import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import PostShare from "./PostShare/PostShare";
import Posts from "./Posts/Posts";

const PostSide = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      // bgcolor={"lightgreen"}
      height={"100vh"}
      overflow={"auto"}
      gap={3}
    >
      <PostShare />
      <Posts />
    </Box>
  );
};

export default PostSide;

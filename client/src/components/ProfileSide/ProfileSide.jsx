import { Box } from "@mui/material";
import React from "react";
import LogoSearch from "./LogoSearch/LogoSearch";
import ProfileCard from "./ProfileCard/ProfileCard";
import FollowersCard from "./FollowersCard/FollowersCard";

const ProfileSide = () => {
  return (
    <Box
      width={"18%"}
      display={"flex"}
      flexDirection={"column"}
      alignContent={"center"}
      gap={2}
    >
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </Box>
  );
};

export default ProfileSide;

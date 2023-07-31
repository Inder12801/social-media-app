import React from "react";
import { Box, Input, OutlinedInput, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import tangerineLogo from '../../../img/tangerine_logo.png'


const LogoSearch = () => {
  return (
    <Box
      display={"flex"}
      sx={{
        position: "relative",
      }}
      alignItems={"center"}
    >
      <img src={tangerineLogo} alt="logo" style={{
        width: "3.2rem"
      }} />
      <Box
        width={"100%"}
        marginX={1}
        padding={0}
      >
        <OutlinedInput
          inputProps={{
            style: {
              padding: "12px 15px",
              outline: "none",
              border: "0",
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              borderColor: "transparent"
            },
          }}
          border={"0px"}
          margin="2"
          placeholder={'#Explore'}
          fullWidth
          borderColor={"transparent"}

        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "-2px",
          background: "#fca61f",
          color: "#f3f3f3",
          padding: "4px 4px",
          borderRadius: '5px',
          margin: "0 10px"
        }}
        // padding={2}
        color={"primary.main"}
        display={'flex'}
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
      >
        <SearchIcon
          fontSize="large"

        />
      </Box>
    </Box>
  );
};

export default LogoSearch;

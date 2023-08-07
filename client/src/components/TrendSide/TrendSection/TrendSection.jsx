import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { trendsData } from "../../../Data/trendsData";

const TrendSection = () => {
  return (
    <Stack
      direction={"column"}
      bgcolor={"rgba(255, 255, 255, 0.64)"}
      borderRadius={"30px"}
      padding={"30px 0"}
      width={"90%"}
      m={"0 auto"}
      position={"relative"}
    >
      <Typography
        sx={{ fontSize: "1.4rem", fontWeight: "700", padding: "0 20px" }}
      >
        Latest Trends
      </Typography>
      <Box display={"flex"} flexDirection={"column"}>
        {trendsData.map((trend) => (
          <Stack
            borderRadius={"10px"}
            padding={"10px 20px"}
            mt={1}
            key={trend.tag}
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
              #{trend.tag}
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "500", color: "gray" }}
            >
              {trend.shares}k Shares
            </Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default TrendSection;

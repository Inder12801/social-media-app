import React, { useState, useEffect } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task, like fetching data from an API
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the task is complete
    }, 2000); // Simulate a 2-second loading time
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      {isLoading ? (
        <CircularProgress size={80} /> // Display the loading indicator
      ) : (
        <Typography variant="h4">Loading Completed!</Typography>
      )}
    </Grid>
  );
};

export default Loading;

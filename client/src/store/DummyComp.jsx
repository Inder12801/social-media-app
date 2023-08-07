import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DummyComp = () => {
  const { counter } = useSelector((state) => state.customReducer);
  const dispatch = useDispatch();
  const incNum = () => {
    dispatch({ type: "increment" });
  };
  const decNum = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div>
      <h1>Increment/ Decrement</h1>
      <Box>
        <Button onClick={incNum}>+</Button>
        <Typography>{counter}</Typography>
        <Button onClick={decNum}>-</Button>
      </Box>
    </div>
  );
};

export default DummyComp;

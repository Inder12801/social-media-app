import { createReducer } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const customReducer = createReducer(initialState, {
  increment: (state) => (state.counter += 1),
  decrement: (state) => (state.counter -= 1),
});

export default customReducer;

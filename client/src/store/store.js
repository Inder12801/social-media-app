import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./reducer";

const reducerFunc = (state = { counter: 0 }, action) => {};

const store = configureStore({
  reducer: { customReducer: customReducer },
});

export default store;

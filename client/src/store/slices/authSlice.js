import { createSlice } from "@reduxjs/toolkit";
import { loginStart } from "../actions/authActions";
import axios from "axios";
import api, { loginUser, signupUser } from "../../api/authRequest";

const initialState = {
  user: null,
  loading: false,
  error: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = loginUser(action.payload);
      console.log(state.user);
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
    signupStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = signupUser(action.payload);
    },
    signupFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  signupSuccess,
  loginSuccess,
  loginFailure,
  signupStart,
  signupFailure,
  logout,
} = authSlice.actions;

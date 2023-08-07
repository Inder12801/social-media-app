import * as authAPI from "../api/authRequest";

export const logIn = (user) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await authAPI.logIn(user);
    dispatch({ type: "LOG_IN", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (user) => async (dispatch) => {
  dispatch({ type: "SIGNUP_START" });

  try {
    const { data } = await authAPI.signUp(user);
    dispatch({ type: "SIGN_UP", payload: data });
  } catch (error) {
    console.log(error);
  }
};

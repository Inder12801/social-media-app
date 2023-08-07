const authReducer = (
  state = { authData: null, loading: false, error: false },
  action
) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: false };
    case "LOG_IN":
      return {
        ...state,
        authData: action.payload,
        loading: false,
        error: false,
      };
    case "LOGIN_ERROR":
      return { ...state, loading: false, error: true };
    case "SIGNUP_START":
      return { ...state, loading: true, error: false };
    case "SIGN_UP":
      return {
        ...state,
        authData: action.payload,
        loading: false,
        error: false,
      };
    case "SIGNUP_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

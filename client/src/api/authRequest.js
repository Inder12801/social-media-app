import axios from "axios";

// Instance of API from backend is created here
const api = axios.create({ baseURL: "http://localhost:8080" });

// A simple signup request is made
export const logIn = (userData) => api.post("/auth/login", userData);
export const signUp = (userData) => api.post("/auth/signup", userData);
export const signupUser = async (user) => {
  try {
    const { data } = await api.post("/auth/signup", user);
    // console.log(data.user);
    localStorage.setItem("profile", JSON.stringify({ ...data }));
    return data.user;
  } catch (err) {
    console.log(err);
  }
};
export const loginUser = async (user) => {
  try {
    const { data } = await api.post("/auth/login", user);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default api;

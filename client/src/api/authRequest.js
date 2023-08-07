import axios from "axios";

// Instance of API from backend is created here
const api = axios.create({ baseURL: "http://localhost:8080" });

// A simple signup request is made
export const logIn = (userData) => api.post("/auth/login", userData);
export const signUp = (userData) => api.post("/auth/signup", userData);

export default api;

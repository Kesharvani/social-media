import axios from "axios";

export const loginServices = (username, password) => {
  return axios.post("/api/auth/login", {
    username,
    password,
  });
};

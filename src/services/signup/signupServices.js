import axios from "axios";

export const signupServices = (username, password, firstName, dataOfBirth) => {
  return axios.post("/api/auth/signup", {
    username,
    password,
    firstName,
    dataOfBirth,
  });
};

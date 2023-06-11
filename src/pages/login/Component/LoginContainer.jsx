import { useState } from "react";

import { useAuth } from "../../../context/AuthContext";

export const LoginContainer = () => {
  const { loginHandler } = useAuth();
  const [inputData, setInputData] = useState({ username: "", password: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log("clicked", inputData.username, inputData.password);
    loginHandler(inputData.username, inputData.password);
  };

  return (
    <>
      <form onSubmit={clickHandler}>
        <label htmlFor="user_id">
          User Name
          <input
            type="text"
            id="user_id"
            name="username"
            placeholder="Enter User Name"
            value={inputData.username}
            onChange={inputHandler}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            value={inputData.password}
            onChange={inputHandler}
          />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

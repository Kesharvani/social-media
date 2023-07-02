import { useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginContainer = () => {
  const navigate=useNavigate()
  const { loginHandler } = useAuth();
  const [inputData, setInputData] = useState({ username: "", password: "" });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const clickHandler = (e) => {
    e.preventDefault();
    loginHandler(inputData.username, inputData.password);
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <form
        onSubmit={clickHandler}
        className="flex flex-col gap-5 w-[28rem] mb-[3rem] p-[2rem] shadow-white shadow-md"
      >
        <h2 className="text-[1.87rem]">Login</h2>
        <label htmlFor="user_id">
          User name:
          <input
            type="text"
            id="user_id"
            name="username"
            placeholder="Enter User Name"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"
            value={inputData.username}
            onChange={inputHandler}
          />
        </label>

        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border-white rounded-md"
            value={inputData.password}
            onChange={inputHandler}
          />
        </label>

        <input type="submit" className="border border-white rounded-md p-[0.5rem] w-[24rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer" />
      </form>
      <h3>not Registered yet?</h3>
      <button onClick={()=>navigate("/register")}  className="border border-white rounded-md p-[0.5rem] w-[24rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer">Register</button>
    </div>
  );
};

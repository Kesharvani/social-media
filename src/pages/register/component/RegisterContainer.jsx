import { useState } from "react";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const RegisterContainer = () => {

  const navigate=useNavigate()
  const { signupHandler, logoutHandler } = useAuth();

  const initialValue = {
    firstName: "",
    dateOfBirth: "",
    userName: "",
    password: "",
  };

  const [inputData, setInputData] = useState(initialValue);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    signupHandler(
      inputData.userName,
      inputData.password,
      inputData.firstName,
      inputData.dateOfBirth
    );
  };

  const guestHandler = () => {
    logoutHandler();
    signupHandler("guest", "guest", "Guest", "guest");
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <form onSubmit={submitHandler} className="flex flex-col gap-5 w-[30rem] mb-[3rem] p-[2rem] shadow-white shadow-md">
        <h3 className="text-[1.87rem]">Sign up</h3>
        <div className="flex flex-col">
          <label htmlFor="gender">Gender(Optional)</label>
          <select name="gender" id="gender" className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md">
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="first_name"> First Name</label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"
            value={inputData.firstName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="last_name"> Last Name(Optional)</label>
          <input type="text" id="last_name" className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="date_of_birth"> Date Of Birth</label>
          <input
            type="date"
            id="date_of_birth"
            name="dateOfBirth"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"
            value={inputData.dateOfBirth}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="user_name"> User Name</label>
          <input
            type="text"
            id="user_name"
            name="userName"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"
            value={inputData.userName}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="px-[0.5rem] py-[0.7rem] w-[24rem] mt-[0.5rem] border border-white rounded-md"
            value={inputData.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div>
          <input type="submit" className="border border-white rounded-md p-[0.5rem] w-[24rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer"/>
        </div>
      </form>
      <h3>already Registered?</h3>
      <button onClick={()=>navigate("/")} className="border border-white rounded-md p-[0.5rem] w-[24rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer">Login</button>
      <button onClick={guestHandler} className="border border-white rounded-md p-[0.5rem] w-[24rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer">Login As Guest</button>
    </div>
  );
};

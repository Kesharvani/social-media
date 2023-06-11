import { useState } from "react";

import { useAuth } from "../../../context/AuthContext";

export const RegisterContainer = () => {
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
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="gender">Gender(Optional)</label>
          <select name="gender" id="gender">
            <option value="">Choose Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="first_name"> First Name</label>
          <input
            type="text"
            id="first_name"
            name="firstName"
            value={inputData.firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="last_name"> Last Name(Optional)</label>
          <input type="text" id="last_name" />
        </div>
        <div>
          <label htmlFor="date_of_birth"> Date Of Birth</label>
          <input
            type="date"
            id="date_of_birth"
            name="dateOfBirth"
            value={inputData.dateOfBirth}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="user_name"> User Name</label>
          <input
            type="text"
            id="user_name"
            name="userName"
            value={inputData.userName}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputData.password}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      <button onClick={guestHandler}>Login As Guest</button>
    </>
  );
};

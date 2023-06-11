import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginServices } from "../services/login/loginServices";
import { signupServices } from "../services/signup/signupServices";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const localStorageToken = JSON.parse(localStorage.getItem("loginTokenItem"));
  const [loginToken, setLoginToken] = useState(localStorageToken?.token);

  const signupHandler = async (username, password, firstName, dataOfBirth) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await signupServices(username, password, firstName, dataOfBirth);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginTokenItem",
          JSON.stringify({
            token: encodedToken,
            user: createdUser,
          })
        );
        setIsLoggedIn(true);
        setLoginToken(encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginHandler = async (username, password) => {
    try {
      const {
        data: { encodedToken, foundUser },
        status,
      } = await loginServices(username, password);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginTokenItem",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setLoginToken(encodedToken);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginTokenItem");
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        isLoggedIn,
        loginToken,
        logoutHandler,
        signupHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
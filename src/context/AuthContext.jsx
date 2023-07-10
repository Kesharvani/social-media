import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { loginServices } from "../services/index";
import { signupServices } from "../services/index";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const localStorageToken = JSON.parse(localStorage.getItem("loginTokenItem"));
  const [loginToken, setLoginToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

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
        setCurrentUser(createdUser);
        setLoginToken(encodedToken);
        navigate("/home");
        toast.success("Successfully!! Registered and Logged In", {
          autoClose: 500,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!!", { autoClose: 500 });
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
        setCurrentUser(foundUser);
        setIsLoggedIn(true);
        navigate("/home");
        toast.success("Successfully!! Logged In", { autoClose: 500 });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!!", { autoClose: 500 });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginTokenItem");
    setIsLoggedIn(false);
    toast.success("Logged Out!!", { autoClose: 500 });
  };
  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        isLoggedIn,
        loginToken,
        logoutHandler,
        signupHandler,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { getAllPostService } from "../services/index";
import { getAllUserService } from "../services/index";
import { initialValue, postReducer } from "../reducer/postReducer";
import { ACTION_TYPE } from "../utils";
import { useAuth } from "./AuthContext";

export const PostContext = createContext();
export const PostContextProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(postReducer, initialValue);
  const [isPostTextFieldFocused, setIsPostTextFieldFocused] = useState(false);
  const getData = async () => {
    try {
      const {
        data: { posts },
        status,
      } = await getAllPostService();

      const {
        data: { users },
      } = await getAllUserService();

      if (status === 200 || status === 201) {
        dispatch({
          type: ACTION_TYPE.SUCCESS,
          payload: { posts, users, currentUser },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const focusTextField = (isFocus) => {
    setIsPostTextFieldFocused(isFocus);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <PostContext.Provider
        value={{
          state,
          dispatch,
          isPostTextFieldFocused,
          focusTextField,
        }}
      >
        {children}
      </PostContext.Provider>
    </>
  );
};

export const usePost = () => useContext(PostContext);

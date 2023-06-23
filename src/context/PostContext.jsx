import { createContext, useContext, useEffect, useReducer } from "react";

import { getAllPostService } from "../services/index";
import { initialValue, postReducer } from "../reducer/postReducer";
import { ACTION_TYPE } from "../utils";

export const PostContext = createContext();
export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialValue);
  const {
    user
  } = JSON.parse(localStorage.getItem("loginTokenItem"));
  const getData = async () => {
    try {
      const {
        data: { posts },
        status,
      } = await getAllPostService();
      if (status === 200 || status === 201) {
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: {posts,user} });
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <PostContext.Provider value={{ state, dispatch }}>
        {children}
      </PostContext.Provider>
    </>
  );
};

export const usePost = () => useContext(PostContext);

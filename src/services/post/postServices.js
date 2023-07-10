import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
const getAllPostService = () => {
  return axios.get("/api/posts");
};

const getSinglePostFromIdService = (postId) => {
  return axios.get(`/api/posts/${postId}`);
};

const getPostOfUserFromUserIdService = (username) => {
  return axios.get(`/api/posts/user/${username}`);
};

const createPostService = async (token, dispatch, postData, toast) => {
  try {
    const {
      data: { posts },
      status,
    } = await axios.post(
      `/api/posts`,
      {
        postData,
      },
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.CREATED_POST, payload: posts });
      toast.success("Posted Successfully!!", {
        autoClose: 500,
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong!!", { autoClose: 500 });
  }
};

const deletePostService = async (token, dispatch, postId) => {
  try {
    const {
      data: { posts },
      status,
    } = await axios.delete(`/api/posts/${postId}`, {
      headers: { authorization: token },
    });
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.POST_DELETED, payload: posts });
    }
  } catch (error) {
    console.error(error);
  }
};

const editPostService = (token, dispatch, postData) => {
  try {
    const {
      data: { posts },
      status,
    } = axios.post(
      `/api/posts/edit/${postData._id}`,
      {
        postData,
      },
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.POST_EDITED, payload: posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllPostService,
  getSinglePostFromIdService,
  getPostOfUserFromUserIdService,
  createPostService,
  deletePostService,
  editPostService,
};

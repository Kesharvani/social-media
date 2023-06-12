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

const createPostService = (token, dispatch, post) => {
  try {
    const {
      data: { posts },
      status,
    } = axios.post(
      "/api/posts",
      {
        postData: post,
      },
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.CREATED_POST, payload: posts });
    }
  } catch (error) {
    console.error(error);
  }
};

const deletePostService = (token, dispatch, postId) => {
  try {
    const {
      data: { posts },
      status,
    } = axios.post(`/api/posts/${postId}`, {
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
      `/api/posts/edit/${postData_id}`,
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

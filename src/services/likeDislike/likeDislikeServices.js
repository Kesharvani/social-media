import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const likeServices = async (token, dispatch, post) => {
  try {
    const {
      data: { posts },
      status,
    } = await axios.post(`/api/posts/like/${post._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.FOLLOW, payload: { posts } });
    }
  } catch (error) {
    console.error(error);
  }
};

export const dislikeServices = async (token, dispatch, post) => {
  try {
    const {
      data: { posts },
      status,
    } = await axios.post(`/api/posts/dislike/${post._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.UNFOLLOW, payload: { posts } });
    }
  } catch (error) {
    console.error(error);
  }
};

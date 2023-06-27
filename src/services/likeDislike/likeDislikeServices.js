import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const likeServices = async (token, dispatch, post) => {
  const postId = post?._id;
  try {
    const {
      data: { posts },
      status,
    } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.LIKE, payload: posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const dislikeServices = async (token, dispatch, post) => {
  const postId = post?._id;
  try {
    const {
      data: { posts },
      status,
    } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.DISLIKE, payload: posts });
    }
  } catch (error) {
    console.error(error);
  }
};

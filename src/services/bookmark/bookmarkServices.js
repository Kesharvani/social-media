import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const addToBookmarkServices = async (token, dispatch, post) => {
  const postId = post._id;
  try {
    const {
      data: { bookmarks },
      status,
    } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.ADDED_TO_BOOKMARK, payload: bookmarks });
    }
  } catch (error) {
    console.error(error);
  }
};

export const removeFromBookmarkServices = async (token, dispatch, post) => {
  const postId = post?._id;
  try {
    const {
      data: { bookmarks },
      status,
    } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.REMOVE_FROM_BOOKMARK, payload: bookmarks });
    }
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";
import { ACTION_TYPE } from "../../utils/index";
export const addToBookmarkServices = async (token, dispatch, post, toast) => {
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
      toast.success("Added In Bookmark!!", { autoClose: 500 });
    }
  } catch (error) {
    toast.error("Something went wrong!!", { autoClose: 500 });
    console.error(error);
  }
};

export const removeFromBookmarkServices = async (
  token,
  dispatch,
  post,
  toast
) => {
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
      toast.success("Removed From Bookmark!!", { autoClose: 500 });
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong!!", { autoClose: 500 });
  }
};

import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const followServices = async (token, dispatch, post) => {
  try {
    const {
      data: { user, followUser },
      status,
    } = await axios.post(`/api/users/follow/${post._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.FOLLOW, payload: { user, followUser } });
    }
  } catch (error) {
    console.error(error);
  }
};

export const unfollowServices = async (token, dispatch, post) => {
  try {
    const {
      data: { user, followUser },
      status,
    } = await axios.post(`/api/users/unfollow/${post._id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.UNFOLLOW, payload: { user, followUser } });
    }
  } catch (error) {
    console.error(error);
  }
};

import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const followServices = async (token, dispatch, followUserId) => {
  try {
    const {
      data: { user, followUser },
      status,
    } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.FOLLOW, payload: { user, followUser } });
    }
  } catch (error) {
    console.error(error);
  }
};

export const unfollowServices = async (token, dispatch, followUserId) => {
  try {
    const {
      data: { user, followUser },
      status,
    } = await axios.post(`/api/users/unfollow/${followUserId}`, {
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

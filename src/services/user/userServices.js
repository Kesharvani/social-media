import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const getAllUserService = async (dispatch) => {
  try {
    const {
      data: { users },
      status,
    } = await axios.get("/api/users");
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.GET_ALL_USER, payload: users });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUserService = async (dispatch, userId) => {
  try {
    const {
      data: { user },
      status,
    } = await axios.get(`/api/users/bookmark/${userId}`);
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.GET_USER, payload: user });
    }
  } catch (error) {
    console.error(error);
  }
};

export const editUserService = async (token, dispatch, userData) => {
  try {
    const {
      data: { user },
      status,
    } = await axios.post(
      "/api/users/edit",
      { userData },
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dispatch({ type: ACTION_TYPE.UPDATE_USER, payload: user });
    }
  } catch (error) {
    console.error(error);
  }
};

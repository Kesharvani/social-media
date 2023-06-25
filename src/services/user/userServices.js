import axios from "axios";

import { ACTION_TYPE } from "../../utils/index";
export const getAllUserService = () => {
  return axios.get("/api/users");
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

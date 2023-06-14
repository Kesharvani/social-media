import { ACTION_TYPE } from "../utils/index";

export const initialValue = {
  posts: [],
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
  }
};

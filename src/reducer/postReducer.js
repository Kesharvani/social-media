import { ACTION_TYPE } from "../utils/index";

export const initialValue = {
  posts: [],
  postFollowing: [],
  userFollowing: [],
  currentUser: {},
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        currentUser: action.payload.user,
        userFollowing: action.payload?.user?.following,
      };
  }
};

import { ACTION_TYPE } from "../utils/index";

export const initialValue = {
  posts: [],
  postFollowing: [],
  userFollowing: [],
  currentUser: {},
  allUser: [],
  bookmark: [],
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        currentUser: action.payload.user,
        userFollowing: action.payload?.user?.following,
        allUser: action.payload?.users,
      };
    case ACTION_TYPE.ADDED_TO_BOOKMARK:
      return {
        ...state,
        bookmark: action.payload,
      };
    case ACTION_TYPE.REMOVE_FROM_BOOKMARK:
      return {
        ...state,
        bookmark: action.payload,
      };
    case ACTION_TYPE.LIKE:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTION_TYPE.DISLIKE:
      return {
        ...state,
        posts: action.payload,
      };
  }
};

import { ACTION_TYPE } from "../utils/index";
export const initialValue = {
  posts: [],
  postFollowing: [],
  userFollowing: [],
  allUser: [],
  bookmark: [],
  searchTerm: "",
  currentUser: {},
  sideBarButton: "Home",
};
export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        userFollowing: action.payload?.currentUser?.following,
        allUser: action.payload?.users,
        currentUser: action?.payload?.currentUser,
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
    case ACTION_TYPE.LATEST:
      return {
        ...state,
        posts: state.posts.sort(
          (item1, item2) =>
            new Date(item2.createdAt) - new Date(item1.createdAt)
        ),
      };
    case ACTION_TYPE.TRENDING:
      return {
        ...state,
        posts: state.posts.sort(
          (item1, item2) => item2?.likes?.likeCount - item1?.likes?.likeCount
        ),
      };
    case ACTION_TYPE.FOLLOW:
      return {
        ...state,
        userFollowing: [...state?.userFollowing, action.payload?.followUser],
      };
    case ACTION_TYPE.UNFOLLOW:
      return {
        ...state,
        userFollowing: state.userFollowing?.filter(
          (item) => item.username !== action.payload?.followUser.username
        ),
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case ACTION_TYPE.POST_DELETED:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTION_TYPE.CREATED_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case ACTION_TYPE.UPDATEPOST:
      return {
        ...state,
        posts: state?.posts?.map((item) => {
          if (item.id === action.payload?.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case ACTION_TYPE.UPDATEUSER:
      return {
        ...state,
        currentUser: { ...action.payload },
        allUser: state.allUser?.map((user) => {
          if (user?.username === action.payload?.username) {
            return action.payload;
          }
          return user;
        }),
      };
    case ACTION_TYPE.SIDEBARBUTTONCLICKED:
      return {
        ...state,
        sideBarButton: action.payload,
      };
    default:
      console.log("Error in Reducer");
  }
};

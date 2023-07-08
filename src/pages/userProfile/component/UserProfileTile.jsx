import { useParams } from "react-router-dom";

import { usePost } from "../../../context/PostContext";
import { useAuth } from "../../../context/AuthContext";
import { followServices } from "../../../services";
import { unfollowServices } from "../../../services";
export const UserProfileTile = () => {
  const { username } = useParams();
  const { state, dispatch } = usePost();
  const { currentUser, loginToken } = useAuth();

  // return a user whom profile you clicked upon
  const findUser = state?.allUser?.find((user) => user.username === username);

  // return true if user is following to logged user else false
  const findUserFollowing = state?.userFollowing?.find(
    (user) => user?.username === findUser.username
  );

  // total post of findUser
  const findUserposts = state.posts.filter(
    (post) => post?.username === findUser?.username
  );
  return (
    <div className="flex flex-col p-[2rem] m-[0.8rem] shadow-md bg-[#1c1e21] gap-4 rounded">
      <div className="flex justify-between bg-[#1c1e21]">
        <div className="bg-[#1c1e21] flex gap-3">
          <img
            src={findUser?.image}
            alt="userProfile"
            width="60px"
            height="50px"
            className="bg-[#1c1e21] border rounded-lg h-[50px] self-center"
          />
          <div className="flex flex-col">
            <p className="bg-[#1c1e21]">{findUser?.firstName}</p>
            <p className="bg-[#1c1e21]">@{findUser?.username}</p>
          </div>
        </div>
        <div className="flex gap-2 bg-[#1c1e21]">
          {currentUser.username === findUser.username && (
            <button>edit profile</button>
          )}
          {currentUser.username === findUser.username && (
            <button>Logout</button>
          )}
          {currentUser.username !== findUser.username && findUserFollowing && (
            <button
              className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center"
              onClick={() =>
                unfollowServices(loginToken, dispatch, findUser?._id)
              }
            >
              Following
            </button>
          )}
          {currentUser.username !== findUser.username && !findUserFollowing && (
            <button
              className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center"
              onClick={() =>
                followServices(loginToken, dispatch, findUser?._id)
              }
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between bg-[#1c1e21] ml-[4.6rem]">
        <span className="bg-[#1c1e21]">{findUserposts?.length} Posts</span>
        {currentUser.username === findUser.username ? (
          <span className="bg-[#1c1e21]">
            {state?.userFollowing?.length} Following
          </span>
        ) : (
          <span className="bg-[#1c1e21]">
            {findUser?.following?.length} Following
          </span>
        )}
        <span className="bg-[#1c1e21]">
          {findUser?.followers?.length} Followers
        </span>
      </div>
    </div>
  );
};

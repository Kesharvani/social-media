import { useParams } from "react-router-dom";

import { usePost } from "../../../context/PostContext";
import { useAuth } from "../../../context/AuthContext";
export const UserProfileTile = () => {
  const { username } = useParams();
  const { state } = usePost();
  const { currentUser } = useAuth();

  // return a user whom profile you clicked upon
  const findUser = state?.allUser?.find((user) => user.username === username);

  // return true if user is following to logged user else false
  const findUserFollowing = state?.userFollowing?.find(
    (user) => user?.username === findUser.username
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
            <button className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center">Following</button>
          )}
          {currentUser.username !== findUser.username && !findUserFollowing && (
            <button className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center">Follow</button>
          )}
        </div>
      </div>
    </div>
  );
};

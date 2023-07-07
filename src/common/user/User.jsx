import { useNavigate } from "react-router-dom";

import { usePost } from "../../context/PostContext";
export const User = ({
  fromUserSuggestionTile,
  userForSuggestion,
  post,
  fromPostUserTile,
}) => {
  const navigate=useNavigate();
  const { state } = usePost();
  const postUser =
    post && state?.allUser.find((item) => item.username === post?.username);
  return (
    <div className="bg-[#1c1e21] flex gap-3">
      {fromUserSuggestionTile ? (
        <div className="border rounded-sm h-[42px] w-[42px] self-center ">
          <img
          src={userForSuggestion?.image}
          alt="userProfile"
          className="bg-[#1c1e21] h-full w-full"
          onClick={()=>navigate(`/profile/${userForSuggestion?.username}`)}
        />
        </div>
        
      ) : (
        <img
          src={postUser?.image}
          alt="userProfile"
          width="60px"
          height="50px"
          className="bg-[#1c1e21] border rounded-lg h-[50px] self-center"
          onClick={()=>navigate(`/profile/${postUser?.username}`)}
        />
      )}

      <div className="flex flex-col">
        {fromUserSuggestionTile && (
          <p className="bg-[#1c1e21]">{userForSuggestion?.firstName}</p>
        )}
        {fromUserSuggestionTile && (
          <p className="bg-[#1c1e21]">@{userForSuggestion?.username}</p>
        )}
        <div className="bg-[#1c1e21] flex gap-2">
          {fromPostUserTile && (
            <p className="bg-[#1c1e21]">{postUser?.firstName}</p>
          )}
          {fromPostUserTile && (
            <p className="bg-[#1c1e21]">{post?.createdAt.slice(0, 10)}</p>
          )}
        </div>
        {fromPostUserTile && (
          <p className="bg-[#1c1e21]">@{postUser?.username}</p>
        )}
      </div>
    </div>
  );
};

import { usePost } from "../../context/PostContext";

export const UserDetailSection = ({
  fromPostUserTile,
  fromUserSuggestionTile,
  post,
  userForSuggestion,
}) => {
  const { state } = usePost();
  const postUser =
    post && state?.allUser.find((item) => item.username === post?.username);

  return (
    <>
      <div className="bg-[#1c1e21] flex gap-3">
        <img src="" alt="userProfile" className="bg-[#1c1e21]" />
        <div className="flex flex-col">
          <div className="bg-[#1c1e21] flex gap-2">
            {fromUserSuggestionTile ? (
              <p className="bg-[#1c1e21]">{userForSuggestion?.firstName}</p>
            ) : (
              <p className="bg-[#1c1e21]">{postUser?.firstName}</p>
            )}
            {fromPostUserTile && (
              <p className="bg-[#1c1e21]">{post?.createdAt.slice(0, 10)}</p>
            )}
          </div>
          {fromUserSuggestionTile ? (
            <p className="bg-[#1c1e21]">@{userForSuggestion?.username}</p>
          ) : (
            <p className="bg-[#1c1e21]">@{postUser?.username}</p>
          )}
        </div>
        {fromUserSuggestionTile && (
          <button className="self-start mt-[0.5rem] p-[0.3rem] border rounded bg-[#3E4042]">
            Follow
          </button>
        )}
      </div>
    </>
  );
};

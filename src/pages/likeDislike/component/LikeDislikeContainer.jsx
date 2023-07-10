import { Sidebar } from "../../../common/sidebar/Sidebar";
import { PostUserTile } from "../../../common/postUserTile/PostUserTile";
import { UserSuggestionTile } from "../../../common/userSuggestionTile/UserSuggestionTile";
import { usePost } from "../../../context/PostContext";
import { useAuth } from "../../../context/AuthContext";

export const LikeDislikeContainer = () => {
  const { state } = usePost();
  const { currentUser } = useAuth();
  const filteredUserSuggestionForHome = state?.allUser?.filter(
    (userSuggestion) => {
      if (currentUser?.username === userSuggestion.username) {
        return false;
      } else {
        return !state?.userFollowing?.some(
          (item) => item?.username === userSuggestion?.username
        );
      }
    }
  );

  const likeArray = state?.posts?.filter((post) =>
    post?.likes?.likedBy.find(
      (userliked) => userliked?.username === currentUser?.username
    )
  );
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1 grow-[7]">
        {likeArray.length > 0 ? (
          <PostUserTile posts={likeArray} />
        ) : (
          <h1 className="text-[1.3rem] text-center pt-[1rem]">No Liked Post</h1>
        )}
      </section>
      <section className="flex-1 flex-wrap grow-[1.8]">
        <UserSuggestionTile
          userDisplayForSuggestion={filteredUserSuggestionForHome}
        />
      </section>
    </div>
  );
};

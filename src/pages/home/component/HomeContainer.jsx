import { Sidebar } from "../../../common/sidebar/Sidebar";
import { PostUserTile } from "../../../common/postUserTile/PostUserTile";
import { UserSuggestionTile } from "../../../common/userSuggestionTile/UserSuggestionTile";
import { usePost } from "../../../context/PostContext";

export const HomeContainer = () => {
  const { state, user } = usePost();

  const filteredPostsForHome = state?.posts?.filter(
    (post) =>{
      if(user.username===post.username){
        return true
      }
      else{
        return state.userFollowing.some(item=>item.username===post.username)
      }
    }
  );

  const filteredUserSuggestionForHome = state.allUser?.filter(
    (userSuggestion) =>
    {
      if(user.username === userSuggestion.username){
        return false
      }
      else{
       return state.userFollowing.every(item=>item.username!==userSuggestion.username)
      }
    }
  );
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1 grow-[7]">
        <PostUserTile posts={filteredPostsForHome} />
      </section>
      <section className="flex-1 flex-wrap grow-[1.8]">
        <UserSuggestionTile
          userDisplayForSuggestion={filteredUserSuggestionForHome}
        />
      </section>
    </div>
  );
};

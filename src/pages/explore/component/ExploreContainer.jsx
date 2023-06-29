import { Sidebar } from "../../../common/sidebar/Sidebar";
import { PostUserTile } from "../../../common/postUserTile/PostUserTile";
import { UserSuggestionTile } from "../../../common/userSuggestionTile/UserSuggestionTile";
import { usePost } from "../../../context/PostContext";

export const ExploreContainer=()=>{
    const { state } = usePost();
    return (
        <div className="flex">
        <Sidebar />
        <section className="flex-1 grow-[7]">
          <PostUserTile posts={state?.posts} />
        </section>
        <section className="flex-1 flex-wrap grow-[1.8]">
          <UserSuggestionTile allUser={state.allUser} />
        </section>
      </div>
    )
}
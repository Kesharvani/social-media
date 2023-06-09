import { useParams } from "react-router-dom";
import { Sidebar } from "../../../common/sidebar/Sidebar";
import { PostUserTile } from "../../../common/postUserTile/PostUserTile";
import { UserSuggestionTile } from "../../../common/userSuggestionTile/UserSuggestionTile";
import { usePost } from "../../../context/PostContext";
import { useAuth } from "../../../context/AuthContext";
import {UserProfileTile} from "./UserProfileTile"
export const UserProfileContainer = () => {
  const {username}=useParams();
  const { state } = usePost();
  const { currentUser } = useAuth();
  const filteredUserSuggestionForHome = state?.allUser?.filter(
    (userSuggestion) => {
      if (currentUser?.username === userSuggestion?.username) {
        return false;
      } else {
        return !state?.userFollowing?.some(
          (item) => item?.username === userSuggestion?.username
        );
      }
    }
  ); 
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1 grow-[7]">
        <UserProfileTile/>
        <PostUserTile
          posts={state.posts?.filter(
            (post) => post?.username === username
          )}
        />
      </section>
      <section className="flex-1 flex-wrap grow-[1.8]">
        <UserSuggestionTile
          userDisplayForSuggestion={filteredUserSuggestionForHome}
        />
      </section>
    </div>
  );
};

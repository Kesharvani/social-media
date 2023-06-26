import { Sidebar } from "../../../common/sidebar/Sidebar";
import {PostUserTile} from "../../../common/postUserTile/PostUserTile"
import {UserSuggestionTile} from "../../../common/userSuggestionTile/UserSuggestionTile"
import {usePost} from "../../../context/PostContext"
export const BookMarkContainer = () => {
    const {state}=usePost()
    console.log(state.currentUser,'state:::::::')
  return (
    <div className="flex">
      <Sidebar />
      <section className="flex-1 grow-[7]">
        <PostUserTile  />
      </section>
      <section className="flex-1 flex-wrap grow-[1.8]">
        <UserSuggestionTile allUser={[]} />
      </section>
    </div>
  );
};

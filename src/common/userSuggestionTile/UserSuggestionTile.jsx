import { UserDetailSection } from "../userDetailSection/UserDetailSection";
import { usePost } from "../../context/PostContext";
import { ACTION_TYPE } from "../../utils";
export const UserSuggestionTile = ({ userDisplayForSuggestion }) => {
  const { dispatch } = usePost();
  
  return (
    <div className="flex flex-col pr-[1.5rem] pt-[1rem] gap-4">
      <div className="flex gap-2 justify-between">
        <button
          className="rounded px-[1rem] py-[0.5rem] border ml-[0.8rem]"
          onClick={() => dispatch({ type: ACTION_TYPE.TRENDING })}
        >
          Trending
        </button>
        <button
          className="rounded px-[1rem] py-[0.5rem] border"
          onClick={() => dispatch({ type: ACTION_TYPE.LATEST })}
        >
          Latest
        </button>
      </div>
      <span>Suggestions For You</span>
      {userDisplayForSuggestion?.map((item) => {
        return (
          <UserDetailSection
            fromUserSuggestionTile
            userForSuggestion={item}
            key={item?._id}
          />
        );
      })}
      <hr />
    </div>
  );
};

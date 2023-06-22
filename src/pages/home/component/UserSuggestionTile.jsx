import { UserDetailSection } from "./UserDetailSection";

export const UserSuggestionTile = () => {
  return (
    <div className="flex flex-col pr-[1.5rem] pt-[1rem] gap-4">
      <div className="flex gap-2 justify-between">
        <button className="rounded px-[1rem] py-[0.5rem] border ml-[0.8rem]">
          Trending
        </button>
        <button className="rounded px-[1rem] py-[0.5rem] border">Latest</button>
      </div>
      <span>Suggestions For You</span>
      <UserDetailSection userDetailSection/>
     <hr />
    </div>
  );
};
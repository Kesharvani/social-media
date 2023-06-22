import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

export const PostUserTile = () => {
  return (
    <div className="flex flex-col p-[2rem] m-[0.8rem] shadow-md bg-[#1c1e21] gap-4 rounded">
      <div className="bg-[#1c1e21] flex gap-3">
        <img src="" alt="userProfile" className="bg-[#1c1e21]" />
        <div className="flex flex-col">
          <div className="bg-[#1c1e21] flex gap-2">
            <p className="bg-[#1c1e21]">Name is Here</p>
            <p className="bg-[#1c1e21]">date is here</p>
          </div>
          <p className="bg-[#1c1e21]">userName</p>
        </div>
      </div>
      <div className="bg-[#1c1e21] flex flex-col gap-4">
        <span className="bg-[#1c1e21]">
          The content will be hereThe content will be hereThe content will be
          hereThe content will be hereThe content will be hereThe content will
          be hereThe content will be here
        </span>
        <hr />
      </div>
      <div className="flex justify-between bg-[#1c1e21]">
        <div className="flex gap-2 bg-[#1c1e21]">
          <button className="flex gap-1 bg-[#1c1e21]">
            <AiOutlineHeart size={24} className="bg-[#1c1e21]" />
            <span className="bg-[#1c1e21]">Like</span>
          </button>
          <span className="bg-[#1c1e21]">2</span>
        </div>
        <button className="flex gap-1 bg-[#1c1e21]">
          <BsBookmarkStar size={24} className="bg-[#1c1e21]" />
          <span className="bg-[#1c1e21]">Bookmark</span>
        </button>
        <button className="flex gap-1 bg-[#1c1e21]">
          <FaRegComments size={24} className="bg-[#1c1e21]" />
          <span className="bg-[#1c1e21]">Comments</span>
        </button>
        <button className="flex gap-2 bg-[#1c1e21]">
          <BsShare size={22} className="bg-[#1c1e21]"/>
          <span className="bg-[#1c1e21]">Share</span>
        </button>
      </div>
    </div>
  );
};

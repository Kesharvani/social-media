import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsBookmark } from "react-icons/bs";
import { FcBookmark } from "react-icons/fc";
import { FaRegComments } from "react-icons/fa";
import { BsShare } from "react-icons/bs";

import { UserDetailSection } from "../userDetailSection/UserDetailSection";
import {
  addToBookmarkServices,
  removeFromBookmarkServices,
} from "../../services";
import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";

export const PostUserTile = ({ posts }) => {
  const { state, dispatch } = usePost();
  const { loginToken } = useAuth(); 
  return (
    <>
      {posts?.map((post) => {
        return (
          <div
            className="flex flex-col p-[2rem] m-[0.8rem] shadow-md bg-[#1c1e21] gap-4 rounded"
            key={post.id}
          >
            <UserDetailSection fromPostUserTile post={post} />
            <div className="bg-[#1c1e21] flex flex-col gap-4">
              <span className="bg-[#1c1e21]">{post.content}</span>
              <hr />
            </div>
            <div className="flex justify-between bg-[#1c1e21]">
              <div className="flex gap-2 bg-[#1c1e21]">
                <button className="flex gap-1 bg-[#1c1e21]">
                  <AiOutlineHeart size={24} className="bg-[#1c1e21]" />
                  <span className="bg-[#1c1e21]">Like</span>
                </button>
                <span className="bg-[#1c1e21]">{post?.likes?.likeCount}</span>
              </div>
              {state.bookmark.length > 0 &&
              state.bookmark?.find((item) => item?._id === post?._id) ? (
                <div className="flex gap-1 bg-transparent">
                  <FcBookmark
                    size={30}
                    className="bg-[#1c1e21]"
                    onClick={() =>
                      removeFromBookmarkServices(loginToken, dispatch, post)
                    }
                  />
                  <span className="bg-[#1c1e21]">Bookmark</span>
                </div>
              ) : (
                <div className="flex gap-1 bg-[#1c1e21]">
                  <BsBookmark
                    size={24}
                    className="bg-[#1c1e21]"
                    onClick={() =>
                      addToBookmarkServices(loginToken, dispatch, post)
                    }
                  />
                  <span className="bg-[#1c1e21]">Bookmark</span>
                </div>
              )}
              <button className="flex gap-1 bg-[#1c1e21]">
                <FaRegComments size={24} className="bg-[#1c1e21]" />
                <span className="bg-[#1c1e21]">Comments</span>
              </button>
              <button className="flex gap-2 bg-[#1c1e21]">
                <BsShare size={22} className="bg-[#1c1e21]" />
                <span className="bg-[#1c1e21]">Share</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

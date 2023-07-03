import { BsThreeDots } from "react-icons/bs";
import Popup from "reactjs-popup";
import { useState } from "react";

import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import { followServices } from "../../services/index";
import { User } from "../user/User";
import { deletePostService } from "../../services/post/postServices";
export const UserDetailSection = ({
  fromPostUserTile,
  fromUserSuggestionTile,
  post,
  userForSuggestion,
}) => {
  const { dispatch, state } = usePost();
  const { loginToken, currentUser } = useAuth();
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const userToFollow = state?.allUser.find(
    (user) => user?.username === post?.username
  );
  const followHandlerFromPost = () => {
    followServices(loginToken, dispatch, userToFollow?._id);
    setButtonVisible((prev) => !prev);
  };
  return (
    <>
      <div className="bg-[#1c1e21] flex justify-between">
        <User
          fromPostUserTile={fromPostUserTile}
          fromUserSuggestionTile={fromUserSuggestionTile}
          post={post}
          userForSuggestion={userForSuggestion}
        ></User>

        {fromPostUserTile && (
          <div className="relative bg-[#1c1e21]">
            <BsThreeDots
              className="bg-[#1c1e21] cursor-pointer"
              onClick={() => setButtonVisible((prev) => !prev)}
            ></BsThreeDots>
            {buttonVisible && post?.username === currentUser?.username && (
              <div className="absolute flex flex-col gap-1 z-10 right-0 top-6 shadow-2xl">
                <button
                  className="px-[1rem] py-[0.5rem] border rounded"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  Edit
                </button>
                <button
                  className="px-[1rem] py-[0.5rem] border rounded"
                  onClick={() =>
                    deletePostService(loginToken, dispatch, post._id)
                  }
                >
                  Delete
                </button>
              </div>
            )}
            {buttonVisible &&
              !(post?.username === currentUser?.username) &&
              state.userFollowing?.some(
                (item) => item.username === post.username
              ) && (
                <div className="absolute gap-1 z-10 right-0 top-6 shadow-2xl">
                  <button
                    className="px-[1rem] py-[0.5rem] border rounded"
                    onClick={() =>
                      deletePostService(loginToken, dispatch, post._id)
                    }
                  >
                    UnFollow
                  </button>
                </div>
              )}

            {buttonVisible &&
              !(post?.username === currentUser?.username) &&
              !state.userFollowing?.some(
                (item) => item.username === post.username
              ) && (
                <div className="absolute gap-1 z-10 right-0 top-6 shadow-2xl">
                  <button
                    className="px-[1rem] py-[0.5rem] border rounded"
                    onClick={followHandlerFromPost}
                  >
                    Follow
                  </button>
                </div>
              )}
          </div>
        )}
        {fromUserSuggestionTile && (
          <button
            className="self-center ml-[0.5rem] px-[1rem] py-[0.5rem] border rounded bg-[#a82723] hover:bg-[#b92b27]"
            onClick={() =>
              followServices(loginToken, dispatch, userForSuggestion?._id)
            }
          >
            Follow
          </button>
        )}
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
          </div>
        </Popup>
      </div>
    </>
  );
};

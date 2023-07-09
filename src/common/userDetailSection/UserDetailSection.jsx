import { BsThreeDots } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useRef } from "react";
import Modal from "react-modal";
import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import { followServices } from "../../services/index";
import { deletePostService } from "../../services/post/postServices";
import { unfollowServices } from "../../services/followUnfollow/followUnfollowServices";
import { User } from "../user/User";
import { ACTION_TYPE } from "../../utils";

export const UserDetailSection = ({
  fromPostUserTile,
  fromUserSuggestionTile,
  post,
  userForSuggestion,
}) => {
  const { dispatch, state } = usePost();
  const { loginToken, currentUser } = useAuth();
  const [buttonVisible, setButtonVisible] = useState(false);
  const textareaRef = useRef();

  //Modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  // open modal
  function openModal() {
    setIsOpen(true);
    setButtonVisible((prev) => !prev);
  }

  // close modal
  function closeModal() {
    setIsOpen(false);
  }
  // custom style for modal to put in center
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  // userId of particular post
  const userOfPost = state?.allUser.find(
    (user) => user?.username === post?.username
  );

  // follow from post tile and setting button not visible
  const followHandlerFromPost = () => {
    followServices(loginToken, dispatch, userOfPost?._id);
    setButtonVisible((prev) => !prev);
  };

  // Unfollow a user and setting button not visible
  const unFollowHandlerFromPost = () => {
    unfollowServices(loginToken, dispatch, userOfPost._id);
    setButtonVisible((prev) => !prev);
  };

  // update click on modal
  const updateHandler = (post) => {
    dispatch({
      type: ACTION_TYPE.UPDATEPOST,
      payload: { ...post, content: textareaRef?.current?.value },
    });
    closeModal();
  };
  return (
    <>
      <div className="bg-[#1c1e21] flex gap-3 justify-between">
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
                  onClick={() => openModal()}
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
                    onClick={unFollowHandlerFromPost}
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
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Edit Post"
        >
          <div className="p-[1rem]">
            <div className="flex justify-between">
              <span className="text-[1.3rem]">Edit Post</span>
              <AiOutlineCloseCircle
                onClick={closeModal}
                size={30}
                className="cursor-pointer"
              />
            </div>
            <div className="flex flex-col mt-[3rem] gap-[2rem] p-[2rem]">
              <div className="flex gap-[0.5rem] justify-between">
                <img
                  src={currentUser?.image}
                  alt="img"
                  className="border rounded-lg h-[50px] w-[60px]"
                />
                <textarea
                  name="edit"
                  id="edittext"
                  cols="30"
                  rows="5"
                  ref={textareaRef}
                  className="grow bg-[#1c1e21] p-[1rem] rounded-lg"
                  defaultValue={post?.content}
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  className="border border-white rounded-md p-[0.5rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer mb-[1rem] w-[50%] text-center"
                  onClick={() => updateHandler(post)}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

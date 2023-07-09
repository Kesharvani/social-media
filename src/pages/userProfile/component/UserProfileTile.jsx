import { useParams, Link } from "react-router-dom";
import Modal from "react-modal";
import { useState, useRef } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";
import { usePost } from "../../../context/PostContext";
import { useAuth } from "../../../context/AuthContext";
import { followServices } from "../../../services";
import { unfollowServices } from "../../../services";
import { ACTION_TYPE } from "../../../utils";
export const UserProfileTile = () => {
  const { username } = useParams();
  const { state, dispatch } = usePost();
  const { currentUser, loginToken, logoutHandler } = useAuth();
  const nameRef = useRef();
  const aboutRef = useRef();
  const websiteRef = useRef();
  //Modal state
  const [modalIsOpen, setIsOpen] = useState(false);

  // open modal
  function openModal() {
    setIsOpen(true);
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

  // return a user whom profile you clicked upon
  const findUser = state?.allUser?.find((user) => user.username === username);

  // return true if user is following to logged user else false
  const findUserFollowing = state?.userFollowing?.find(
    (user) => user?.username === findUser.username
  );

  // total post of findUser
  const findUserposts = state.posts.filter(
    (post) => post?.username === findUser?.username
  );
  // update on modal
  const updateHandler = (user) => {
    dispatch({ type: ACTION_TYPE.UPDATEUSER, payload: user });
    closeModal();
  };

  return (
    <div className="flex p-[2rem] m-[0.8rem] shadow-md bg-[#1c1e21] gap-4 rounded">
      <img
        src={findUser?.image}
        alt="userProfile"
        width="60px"
        height="50px"
        className="bg-[#1c1e21] border rounded-lg h-[50px]"
      />
      <div className="grow flex flex-col gap-[0.5rem] bg-[#1c1e21] ">
        <div className="flex justify-between bg-[#1c1e21]">
          <div className="flex flex-col">
            <p className="bg-[#1c1e21]">{findUser?.firstName}</p>
            <p className="bg-[#1c1e21]">@{findUser?.username}</p>
          </div>
          <div className="flex gap-4 bg-[#1c1e21]">
            {currentUser.username === findUser.username && (
              <button
                className="self-center px-[1rem] py-[0.2rem] border rounded bg-[#a82723] hover:bg-[#b92b27]"
                onClick={openModal}
              >
                Edit
              </button>
            )}
            {currentUser.username === findUser.username && (
              <HiOutlineLogout
                size={36}
                className="self-center bg-[#1c1e21] cursor-pointer"
                onClick={() => logoutHandler()}
              />
            )}
            {currentUser.username !== findUser.username &&
              findUserFollowing && (
                <button
                  className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center"
                  onClick={() =>
                    unfollowServices(loginToken, dispatch, findUser?._id)
                  }
                >
                  Following
                </button>
              )}
            {currentUser.username !== findUser.username &&
              !findUserFollowing && (
                <button
                  className="rounded px-[1rem] py-[0.4rem] border h-[80%] self-center"
                  onClick={() =>
                    followServices(loginToken, dispatch, findUser?._id)
                  }
                >
                  Follow
                </button>
              )}
          </div>
        </div>
        <span className="bg-[#1c1e21]">{findUser?.about}</span>
        <div className="bg-[#1c1e21]">
          <Link to="/" className="bg-[#1c1e21]">
            {findUser?.portfolioUrl}
          </Link>
        </div>
        <div className="flex justify-between bg-[#1c1e21]">
          <span className="bg-[#1c1e21]">{findUserposts?.length} Posts</span>
          {currentUser.username === findUser.username ? (
            <span className="bg-[#1c1e21]">
              {state?.userFollowing?.length} Following
            </span>
          ) : (
            <span className="bg-[#1c1e21]">
              {findUser?.following?.length} Following
            </span>
          )}
          <span className="bg-[#1c1e21]">
            {findUser?.followers?.length} Followers
          </span>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Profile"
        ariaHideApp={false}
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
          <div className="flex flex-col gap-[1rem] p-[2rem]">
            <div className="flex justify-between gap-[1rem]">
              <span className="self-center">Avatar</span>
              <img
                src={currentUser?.image}
                alt="userImage"
                className="border rounded-lg h-[50px] w-[60px]"
              />
            </div>
            <div className="flex justify-between gap-[1rem]">
              <label>Name</label>
              <input
                type="text"
                defaultValue={currentUser?.firstName}
                ref={nameRef}
                className="border rounded-sm p-[0.2rem]"
              />
            </div>
            <div className="flex justify-between gap-[1rem]">
              <span>User Name</span>
              <span>{currentUser?.username}</span>
            </div>
            <div className="flex justify-between gap-[1rem]">
              <span>About</span>
              <input
                type="text"
                ref={aboutRef}
                defaultValue={currentUser?.about}
                className="border rounded-sm p-[0.2rem]"
              />
            </div>
            <div className="flex justify-between gap-[1rem]">
              <span>Website</span>
              <input
                type="text"
                ref={websiteRef}
                defaultValue={currentUser?.portfolioUrl}
                className="border rounded-sm p-[0.2rem]"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="border border-white rounded-md p-[0.5rem] bg-[#a82723] hover:bg-[#b92b27] cursor-pointer mb-[1rem] w-[50%] text-center"
              onClick={() =>
                updateHandler({
                  ...currentUser,
                  firstName: nameRef.current.value,
                  about: aboutRef.current.value,
                  portfolioUrl: websiteRef.current.value,
                })
              }
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

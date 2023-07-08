import { BsImage } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { useAuth } from "../../../context/AuthContext";
import { usePost } from "../../../context/PostContext";
import { createPostService } from "../../../services/index";
import { useEffect, useRef } from "react";
export const CreatPostTile = () => {
  const { loginToken,currentUser } = useAuth();
  const { dispatch, isPostTextFieldFocused, focusTextField } = usePost();
  let postData = { content: "" };
  const inputRef = useRef(null);
  const createPostHandler = (e) => {
    postData = { ...postData, content: e.target.value };
  };
  const onClickCreatePostHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "" || inputRef.current.value === null) {
      inputRef.current.value = "";
    } else {
      createPostService(loginToken, dispatch, postData);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    if (isPostTextFieldFocused) {
      inputRef.current.focus();
    }
  }, [focusTextField,isPostTextFieldFocused]);
  return (
    <form
      className="flex flex-col p-[2rem] m-[0.8rem] shadow-md bg-[#1c1e21] gap-4 rounded"
      onSubmit={onClickCreatePostHandler}
    >
      <div className="flex gap-4 bg-[#1c1e21] w-full">
        <div className="bg-[#1c1e21]">
          <img
            src={currentUser?.image}
            alt="currentUserImage"
            className="border rounded-lg h-[50px] w-[60px]"
          />
        </div>
        <textarea
          name="createpost"
          id="createpost"
          cols="30"
          rows="5"
          placeholder="Whats happening?"
          className="grow bg-[#1c1e21] p-[1rem]"
          onBlur={() => focusTextField(false)}
          ref={inputRef}
          onChange={createPostHandler}
        ></textarea>
      </div>
      <hr />
      <div className="flex justify-between bg-[#1c1e21]">
        <div className="flex gap-3 bg-[#1c1e21] self-center">
          <BsImage size={24} className="cursor-pointer" />
          <GrEmoji size={24} className="bg-[#1c1e21] cursor-pointer" />
        </div>
        <button
          type="submit"
          className="px-[1rem] py-[0.5rem] border rounded bg-[#a82723] hover:bg-[#b92b27]"
        >
          Post
        </button>
      </div>
    </form>
  );
};

import { AiTwotoneHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContext";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { focusTextField } = usePost();
  const [selectedTab, setSelectedTab] = useState("Home");
  //redirect to home page

  const homePageHandler = () => {
    setSelectedTab("Home");
    navigate("/home");
  };

  //redirect to explore handler

  const exploreHandler = () => {
    setSelectedTab("Explore");
    navigate("/explore");
  };

  // redirect to bookmark page
  const bookmarkHandler = () => {
    setSelectedTab("Bookmarks");
    navigate("/bookmark");
  };
  // redire to like page
  const likeDislikePageHandler = () => {
    setSelectedTab("Liked");
    navigate("/like");
  };

  // redirect to home page and focus on text area
  const postButtonHandler = () => {
    navigate("/home");
    setSelectedTab("Post");
    focusTextField(true);
  };
  return (
    <nav className="flex flex-col flex-1 flex-wrap border-r-[1px]">
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          selectedTab === "Home" ? "bg-slate-600" : ""
        }`}
        onClick={homePageHandler}
      >
        <AiTwotoneHome
          size={24}
          className={`${selectedTab === "Home" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${selectedTab === "Home" ? "bg-slate-600" : ""}`}
        >
          Home
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          selectedTab === "Explore" ? "bg-slate-600" : ""
        }`}
        onClick={exploreHandler}
      >
        <MdExplore
          size={24}
          className={`${selectedTab === "Explore" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${
            selectedTab === "Explore" ? "bg-slate-600" : ""
          }`}
        >
          Explore
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          selectedTab === "Bookmarks" ? "bg-slate-600" : ""
        }`}
        onClick={bookmarkHandler}
      >
        <BsBookmarkStar
          size={24}
          className={`${selectedTab === "Bookmarks" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${
            selectedTab === "Bookmarks" ? "bg-slate-600" : ""
          }`}
        >
          Bookmarks
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          selectedTab === "Liked" ? "bg-slate-600" : ""
        }`}
        onClick={likeDislikePageHandler}
      >
        <AiOutlineHeart
          size={24}
          className={`${selectedTab === "Liked" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${selectedTab === "Liked" ? "bg-slate-600" : ""}`}
        >
          Liked
        </p>
      </button>
      <button
        className={`text-xl border text-white px-[2rem] py-[0.8rem] hover:bg-slate-400 mt-[0.5rem] ${
          selectedTab === "Post" ? "bg-slate-600" : ""
        }`}
        onClick={postButtonHandler}
      >
        Post
      </button>
    </nav>
  );
};

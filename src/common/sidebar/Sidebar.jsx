import { AiTwotoneHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { usePost } from "../../context/PostContext";
import { ACTION_TYPE } from "../../utils";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { focusTextField, state, dispatch } = usePost();

  //redirect to home page
  const homePageHandler = () => {
    dispatch({ type: ACTION_TYPE.SIDEBARBUTTONCLICKED, payload: "Home" });
    navigate("/home");
  };

  //redirect to explore handler
  const exploreHandler = () => {
    dispatch({ type: ACTION_TYPE.SIDEBARBUTTONCLICKED, payload: "Explore" });
    navigate("/explore");
  };

  // redirect to bookmark page
  const bookmarkHandler = () => {
    dispatch({ type: ACTION_TYPE.SIDEBARBUTTONCLICKED, payload: "Bookmarks" });
    navigate("/bookmark");
  };
  // redire to like page
  const likeDislikePageHandler = () => {
    dispatch({ type: ACTION_TYPE.SIDEBARBUTTONCLICKED, payload: "Liked" });
    navigate("/like");
  };

  // redirect to home page and focus on text area
  const postButtonHandler = () => {
    navigate("/home");
    dispatch({ type: ACTION_TYPE.SIDEBARBUTTONCLICKED, payload: "Post" });
    focusTextField(true);
  };
  return (
    <nav className="flex flex-col flex-1 flex-wrap border-r-[1px]">
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          state.sideBarButton === "Home" ? "bg-slate-600" : ""
        }`}
        onClick={homePageHandler}
      >
        <AiTwotoneHome
          size={24}
          className={`${state.sideBarButton === "Home" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${state.sideBarButton === "Home" ? "bg-slate-600" : ""}`}
        >
          Home
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          state.sideBarButton === "Explore" ? "bg-slate-600" : ""
        }`}
        onClick={exploreHandler}
      >
        <MdExplore
          size={24}
          className={`${state.sideBarButton === "Explore" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${
            state.sideBarButton === "Explore" ? "bg-slate-600" : ""
          }`}
        >
          Explore
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          state.sideBarButton === "Bookmarks" ? "bg-slate-600" : ""
        }`}
        onClick={bookmarkHandler}
      >
        <BsBookmarkStar
          size={24}
          className={`${state.sideBarButton === "Bookmarks" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${
            state.sideBarButton === "Bookmarks" ? "bg-slate-600" : ""
          }`}
        >
          Bookmarks
        </p>
      </button>
      <button
        className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${
          state.sideBarButton === "Liked" ? "bg-slate-600" : ""
        }`}
        onClick={likeDislikePageHandler}
      >
        <AiOutlineHeart
          size={24}
          className={`${state.sideBarButton === "Liked" ? "bg-slate-600" : ""}`}
        />
        <p
          className={`text-xl ${state.sideBarButton === "Liked" ? "bg-slate-600" : ""}`}
        >
          Liked
        </p>
      </button>
      <button
        className={`text-xl border text-white px-[2rem] py-[0.8rem] hover:bg-slate-400 mt-[0.5rem] ${
          state.sideBarButton === "Post" ? "bg-slate-600" : ""
        }`}
        onClick={postButtonHandler}
      >
        Post
      </button>
    </nav>
  );
};

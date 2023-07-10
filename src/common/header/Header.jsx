import { useNavigate } from "react-router-dom";

import Hi5 from "../../assets/Hi5.jpeg";
import { useAuth } from "../../context/AuthContext";
import { usePost } from "../../context/PostContext";
import { ACTION_TYPE } from "../../utils";
import { User } from "../user/User";
export const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = usePost();
  const { currentUser } = useAuth();

  const filteredUserOnSearch =
    state?.searchTerm !== "" &&
    state.allUser.filter(
      (user) =>
        user.username.toUpperCase().includes(state?.searchTerm.toUpperCase()) &&
        user?.username !== currentUser?.username
    );

  const suggestionHandler = (suggestion) => {
    dispatch({ type: ACTION_TYPE.SEARCH, payload: "" });
    navigate(`/profile/${suggestion?.username}`);
  };

  return (
    <>
      <div className="flex px-12 py-4 justify-between items-center">
        <div>
          <img
            src={Hi5}
            alt="logo"
            width="70px"
            height="50px"
            className="border rounded-full"
            onClick={()=>navigate("/home")}
          />
        </div>
        <div className="relative">
          <input
            type="search"
            name="search"
            placeholder="Search By User"
            className="border-white border rounded py-2 pr-6 pl-2 w-96 grayscale brightness-125 focus:outline-none "
            value={state?.searchTerm}
            onChange={(e) =>
              dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value })
            }
          />
          {state?.searchTerm !== "" && (
            <ul className="absolute z-20 w-full">
              {filteredUserOnSearch?.map((suggestion) => {
                return (
                  <li key={suggestion?._id}>
                    <div onClick={() => suggestionHandler(suggestion)}>
                      <User
                        fromUserSuggestionTile
                        userForSuggestion={suggestion}
                      />
                      <hr />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div>
          <img
            src={currentUser?.image}
            alt="currentUserProfile"
            className="border rounded-lg h-[50px] w-[60px]"
            onClick={() => navigate(`/profile/${currentUser.username}`)}
          />
        </div>
      </div>
    </>
  );
};

import { useNavigate } from "react-router-dom";

import Hi5 from "../../assets/Hi5.jpeg";
import { useAuth } from "../../context/AuthContext";
import { usePost } from "../../context/PostContext";
import { ACTION_TYPE } from "../../utils";
export const Header = () => {
  const navigate = useNavigate();
  const { dispatch } = usePost();
  const { currentUser } = useAuth();

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
          />
        </div>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search By User"
            className="border-white border rounded py-2 pr-6 pl-2 w-96 grayscale brightness-125 focus:outline-none "
            onChange={(e) =>
              dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value })
            }
          />
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

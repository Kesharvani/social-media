import Hi5 from "../../assets/Hi5.jpeg";
import {usePost} from "../../context/PostContext"
import { ACTION_TYPE } from "../../utils";
export const Header = () => {
  const {dispatch} =usePost()
  return (
    <>
      <div className="flex px-12 py-4 justify-between items-center">
        <div>
          <img src={Hi5} alt="logo" width="70px" height="50px" />
        </div>
        <div>
          <input
            type="search"
            name="search"
            placeholder="Search By User"
            className="border-white border rounded py-2 pr-6 pl-2 w-96 grayscale brightness-125 focus:outline-none "
            onChange={(e)=>dispatch({type:ACTION_TYPE.SEARCH,payload:e.target.value})}
          />
        </div>
        <div>
          <img
            src={Hi5}
            alt="userProfile"
            className="border rounded-full"
            width="70px"
            height="50px"
          />
        </div>
      </div>
    </>
  );
};

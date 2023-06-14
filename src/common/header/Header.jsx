import "./Header.css"
import Hi5 from "../../assets/Hi5.jpeg";

export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div>
          <img src={Hi5} alt="logo" width="70px" height="50px" />
        </div>
        <div>
          <input type="text" name="search" placeholder="Search By User"/>
        </div>
        <div>userProfilePicture</div>
      </div>
    </>
  );
};

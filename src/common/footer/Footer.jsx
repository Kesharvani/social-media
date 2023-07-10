import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import Hi5 from "../../assets/Hi5.jpeg";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4  items-center mt-[1rem]">
      <div className="flex justify-center gap-4">
        <Link to="/home">
          <img src={Hi5} alt="logo" width="70px" height="50px" />
        </Link>
      </div>
      <div className="flex gap-4 justify-center">
        <span>
          <Link to="www.linkedin.com/in/shubham-kesharvani-038a88129">
            <BsLinkedin size={24} />
          </Link>
        </span>
        <span>
          <Link to="https://github.com/Kesharvani">
            <BsGithub size={24} />
          </Link>
        </span>
        <span>
          <Link to="https://www.facebook.com/profile.php?id=100008978371402">
            <BsFacebook size={24} />
          </Link>
        </span>
      </div>
      <div>
        Copyright
        {" "}<span className="before:content-['\24B8']"> Shubham Kesharvani</span>
      </div>
    </div>
  );
};

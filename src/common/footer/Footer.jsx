import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import Hi5 from "../../assets/Hi5.jpeg";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-4  items-center">
      <div className="flex justify-center gap-4">
        <Link to="/">
          <img
            src={Hi5}
            alt="logo"
            width="70px"
            height="50px"
            className="border rounded-full"
          />
        </Link>
      </div>
      <div className="flex gap-4 justify-center">
        <span>
          <Link to="https://google.com">
            <BsLinkedin size={24} />
          </Link>
        </span>
        <span>
          <Link to="/">
            <BsGithub size={24} />
          </Link>
        </span>
        <span>
          <Link to="/">
            <BsFacebook size={24} />
          </Link>
        </span>
      </div>
      <div>
        Copyright{" "}
        <span className="before:content-['\24B8']"> Shubham Kesharvani</span>
      </div>
    </div>
  );
};

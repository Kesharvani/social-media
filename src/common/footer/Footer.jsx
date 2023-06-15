import { Link } from "react-router-dom";

import Hi5 from "../../assets/Hi5.jpeg";
export const Footer = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-4">
        <img src={Hi5} alt="logo" width="70px" height="50px" />
      </div>
      <div className="flex gap-4 justify-center">
        <span>github</span>
        <span>facebook</span>
        <span>twitter</span>
      </div>
      <div>
        Copyright
        <span className="before:content-['\24B8']">Shubham Kesharvani</span>
      </div>
    </div>
  );
};

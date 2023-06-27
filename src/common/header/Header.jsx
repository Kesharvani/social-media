import Hi5 from "../../assets/Hi5.jpeg";

export const Header = () => {
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

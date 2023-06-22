export const UserDetailSection = ({postUserTile,userDetailSection}) => {
  console.log("userDetailSection",userDetailSection)
  return (
    <>
      <div className="bg-[#1c1e21] flex gap-3">
        <img src="" alt="userProfile" className="bg-[#1c1e21]" />
        <div className="flex flex-col">
          <div className="bg-[#1c1e21] flex gap-2">
            <p className="bg-[#1c1e21]">Name is Here</p>
            {postUserTile && <p className="bg-[#1c1e21]">date is here</p>}
          </div>
          <p className="bg-[#1c1e21]">userName</p>
        </div>
        {userDetailSection&& <button className="self-start mt-[0.5rem] p-[0.3rem] border rounded bg-[#3E4042]">Follow</button>}
      </div>
    </>
  );
};

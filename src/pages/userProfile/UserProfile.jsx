import { Header } from "../../common/index";
import { Footer } from "../../common/index";

import { UserProfileContainer } from "./component/UserProfileContainer";
export const UserProfile = () => {
  return (
    <>
      <Header />
      <hr />
      <UserProfileContainer />
      <hr />
      <Footer />
    </>
  );
};

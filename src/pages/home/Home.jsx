import { Header } from "../../common/index";
import {Footer} from "../../common/index"
import {HomeContainer} from "./component/HomeContainer"
export const Home = () => {
  return (
    <>
      <Header />
      <hr />
      <HomeContainer/>
      <hr />
      <Footer/>
    </>
  );
};

import { Header } from "../../common/index";
import {Footer} from "../../common/index"
import {LikeDislikeContainer} from "./component/LikeDislikeContainer"

export const LikeDislike=()=>{
    return (
        <>
        <Header />
        <hr />
        <LikeDislikeContainer/>
        <hr />
        <Footer/>
      </>
    )
}
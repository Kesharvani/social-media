import { AiTwotoneHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import {PostUserTile} from "./PostUserTile"


import {useState} from 'react'
export const HomeContainer=()=>{
    const [selectedTab,setSelectedTab]=useState('Home')
    return (
        <div className="flex">
            <nav className="flex flex-col flex-1 flex-wrap border-r-[1px]">
                <button className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${selectedTab==="Home"? "bg-slate-600":''}`} onClick={()=>setSelectedTab("Home")}>
                    <AiTwotoneHome size={24} className={`${selectedTab==="Home"? "bg-slate-600":''}`}/>
                    <p className={`text-xl ${selectedTab==="Home"? "bg-slate-600":''}`}>Home</p>
                </button>
                <button  className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${selectedTab==="Explore"? "bg-slate-600":''}`} onClick={()=>setSelectedTab("Explore")}>
                    <MdExplore size={24} className={`${selectedTab==="Explore"? "bg-slate-600":''}`}/>
                    <p className={`text-xl ${selectedTab==="Explore"? "bg-slate-600":''}`}>Explore</p>
                </button>
                <button  className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${selectedTab==="Bookmarks"? "bg-slate-600":''}`} onClick={()=>setSelectedTab("Bookmarks")} >
                    <BsBookmarkStar size={24} className={`${selectedTab==="Bookmarks"? "bg-slate-600":''}`}/>
                    <p className={`text-xl ${selectedTab==="Bookmarks"? "bg-slate-600":''}`}>Bookmarks</p>
                </button>
                <button  className={`flex  gap-3 items-center px-[2rem] py-[0.8rem] ${selectedTab==="Liked"? "bg-slate-600":''}`} onClick={()=>setSelectedTab("Liked")}>
                    <AiOutlineHeart size={24} className={`${selectedTab==="Liked"? "bg-slate-600":''}`}/>
                    <p className={`text-xl ${selectedTab==="Liked"? "bg-slate-600":''}`}>Liked</p>
                </button>
                <button  className={`text-xl border text-white px-[2rem] py-[0.8rem] hover:bg-slate-400 mt-[0.5rem] ${selectedTab==="Post"? "bg-slate-600":''}`} onClick={()=>setSelectedTab("Post")}>
                    Post
                </button>
            </nav>
            <section className="flex-1 grow-[7]">
            <PostUserTile/>
            </section>
            <section className="flex-1 flex-wrap">div 3</section>
        </div>
    )
}
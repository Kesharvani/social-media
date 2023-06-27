import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Login } from "./pages/index.js";
import { Register } from "./pages/index.js";
import { Bookmark } from "./pages/index.js";
import { LikeDislike } from "./pages/index.js";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/like" element={<LikeDislike />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

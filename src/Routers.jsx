import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Login } from "./pages/index.js";
import { Register } from "./pages/index.js";
import { Bookmark } from "./pages/index.js";
import { LikeDislike } from "./pages/index.js";
import { Explore } from "./pages/index.js";
import { RequireAuth } from "./common/requireAuth/RequireAuth.jsx";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />

        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route
          path="/like"
          element={
            <RequireAuth>
              <LikeDislike />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

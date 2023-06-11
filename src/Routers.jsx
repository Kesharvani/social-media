import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/index.js";
import { Login } from "./pages/index.js";
import { Register } from "./pages/index.js";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

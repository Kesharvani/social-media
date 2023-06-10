import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index.js";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

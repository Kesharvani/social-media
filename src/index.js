import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Routers } from "./Routers";
import { AuthProvider } from "./context/AuthContext";
import { PostContextProvider } from "./context/PostContext";
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PostContextProvider>
          <App />
          <Routers />
        </PostContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

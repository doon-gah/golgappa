import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import MainLayout from "./components/MainLayout.jsx";
import Franchising from "./components/Franchising.jsx";
import AboutUs from "./components/AboutUs.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MainLayout />,
        name: "MainLayout",
      },
      {
        path: "/franchising",
        element: <Franchising />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

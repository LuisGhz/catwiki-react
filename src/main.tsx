import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { MainCatTitle } from "./components/MainCatTitle.tsx";
import { SearchHeader } from "./components/SearchHeader.tsx";
import { WhyToHaveACat } from "./components/WhyToHaveACat.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <MainCatTitle />
            <SearchHeader />
            <WhyToHaveACat />
          </>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);

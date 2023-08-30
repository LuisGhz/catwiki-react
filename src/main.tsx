import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { SearchHeader } from "./components/SearchHeader.tsx";
import { WhyToHaveACat } from "./components/WhyToHaveACat.tsx";
import { TopBreeds } from "./components/TopBreeds.tsx";
import { BreedDetail } from "./components/BreedDetail.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <>
            <SearchHeader />
            <WhyToHaveACat />
          </>
        ),
      },
      {
        path: "top",
        element: <TopBreeds />,
      },
      {
        path: "breed/:id",
        element: <BreedDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);

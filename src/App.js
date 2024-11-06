import React, { useContext } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AppContext, DataContext } from "./context/contextApi";

import Header from "./components/Header";
import Feed from "./pages/Feed";
import SearchResult from "./pages/SearchResult";
import VideoDetails from "./pages/VideoDetails";
import ErrorComponent from "./shared/ErrorComponent";
import SideNav from "./components/SideNav";
import LargeSide from "./components/LargeSide";
import LeftNav from "./components/LeftNav";
import LargeNav from "./components/LargeNav";
import Head from "./components/Head";

const AppLayout = () => {
  const { large, setLarge } = useContext(DataContext);

  return (
    <div className="app dark:bg-black min-h-full overflow-y-scroll">
      <div className="flex flex-row w-full over">
        <div className="w-fit hidden small"> {large ? <LargeSide /> : <LargeNav />}</div>
        <div className="flex-col w-full flex-1">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "/searchResult/:searchQuery", element: <SearchResult /> },
      { path: "/video/:id", element: <VideoDetails /> },
    ],
  },
]);

function App() {
  return (
    <AppContext>
      <div className="flex flex-col h-full overflow-y-hidden">
        <RouterProvider router={appRouter} />
      </div>
    </AppContext>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import { getAllCars } from "./redux/catalog/thunk";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          {
            index: true,
            lazy: () => import("./pages/MainPage"),
          },
          {
            path: "catalog",
            loader: () => dispatch(getAllCars()),
            lazy: () => import("./pages/CatalogPage"),
          },
          {
            path: "favorites",
            lazy: () => import("./pages/FavoritesPage"),
          },
          {
            path: "*",
            lazy: () => import("./pages/ErrorPage"),
          },
        ],
      },
    ],
    { basename: "/car-rent-test-job" }
  );
  return <RouterProvider router={router} />;
}

export default App;

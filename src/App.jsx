import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import { fetchAllCars } from "./api/axios";

// const MainPage = lazy(() => import("./pages/MainPage"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage"));

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<SharedLayout />}>
//       <Route index  lazy={() => import("./pages/MainPage")} />
//       <Route path="catalog" lazy={() => import("./pages/CatalogPage")} />
//       <Route path="favorites" lazy={() => import("./pages/FavoritesPage")} />
//       <Route path="*" element={<ErrorPage />} />
//     </Route>
//   ),
//   { basename: "/car-rent-test-job" }
// );
let router = createBrowserRouter(
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
          loader: () => fetchAllCars(),
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;

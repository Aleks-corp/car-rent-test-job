import "./App.css";
import { lazy } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import ErrorPage from "./pages/ErrorPage";

const MainPage = lazy(() => import("./pages/MainPage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<MainPage />} />
      <Route path="catalog" element={<CatalogPage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  { basename: "/car-rent-test-job" }
);

function App() {
  return (
    <RouterProvider router={router} />
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<MainPage />} />
    //     <Route path="catalog" element={<CatalogPage />} />
    //     <Route path="favorites" element={<FavoritesPage />} />
    //   </Route>
    // </Routes>
  );
}

export default App;

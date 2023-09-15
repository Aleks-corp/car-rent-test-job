import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import ErrorPage from "./pages/ErrorPage";

// const MainPage = lazy(() => import("./pages/MainPage"));
// const CatalogPage = lazy(() => import("./pages/CatalogPage"));
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index lazy={() => import("./pages/MainPage")} />
      <Route path="catalog" lazy={() => import("./pages/CatalogPage")} />
      <Route path="favorites" lazy={() => import("./pages/FavoritesPage")} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  { basename: "/car-rent-test-job" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

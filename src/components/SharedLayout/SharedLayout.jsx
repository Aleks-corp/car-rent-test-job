import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { LayoutContainer } from "./SharedLayout.styled";
import NavBar from "../NavBar/NavBar";

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutContainer>
  );
};

export default SharedLayout;

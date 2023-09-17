import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { LayoutContainer, Main } from "./SharedLayout.styled";

import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutContainer>
  );
};

export default SharedLayout;

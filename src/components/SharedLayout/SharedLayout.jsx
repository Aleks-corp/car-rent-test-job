import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Modal from "../Modal/Modal";

import { LayoutContainer, Main } from "./SharedLayout.styled";

import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import { ModalItem } from "../ModalItem/ModalItem";
import { useSelector } from "react-redux";
import { selectShowModal } from "../../redux/selectors";

const SharedLayout = () => {
  const showModal = useSelector(selectShowModal);
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Toaster position="top-right" reverseOrder={false} />
      {showModal && (
        <Modal>
          <ModalItem />
        </Modal>
      )}
    </LayoutContainer>
  );
};

export default SharedLayout;

import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { Overlay, ModalContainer } from "./Modal.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectShowModal } from "../../redux/selectors";
import { isShownModal } from "../../redux/catalog/catalogSlice";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children }) {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        dispatch(isShownModal(!showModal));
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dispatch, showModal]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      dispatch(isShownModal(!showModal));
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

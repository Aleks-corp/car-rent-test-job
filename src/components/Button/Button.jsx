import PropTypes from "prop-types";
import { Btn } from "./Button.styled";

export const Button = ({ title, type, onClick }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {title}
    </Btn>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

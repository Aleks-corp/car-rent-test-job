import NavBar from "../NavBar/NavBar";
import { CallLink, HeaderContainer } from "./Header.styled";
import logoImage from "../../assets/car-rent-logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logoImage} width="85" height="40" />
      <NavBar />
      <CallLink href="tel:+380730000000">CALL US</CallLink>
    </HeaderContainer>
  );
};

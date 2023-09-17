import Economy from "../../assets/car-rent-icon/image1.png";
import Business from "../../assets/car-rent-icon/image2.png";
import OverRoad from "../../assets/car-rent-icon/image3.png";
import Minivant from "../../assets/car-rent-icon/image4.png";
import {
  RentContainer,
  Image,
  Title,
  TitleAccent,
  RentCarTitle,
  BtnWrapper,
  RentItem,
} from "./HomeRentCar.styled";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export function HomeRentCar() {
  const navigate = useNavigate();
  return (
    <div>
      <RentCarTitle>Rent car by Price</RentCarTitle>
      <RentContainer>
        <RentItem>
          <Image src={Economy} />
          <Title>ECONOMY</Title>
          <TitleAccent>$15 - $45</TitleAccent>
        </RentItem>
        <RentItem>
          <Image src={Business} />
          <Title>BUSINESS</Title>
          <TitleAccent>$30 - $70</TitleAccent>
        </RentItem>
        <RentItem>
          <Image src={OverRoad} />
          <Title>OVER ROAD</Title>
          <TitleAccent>$36 - $700</TitleAccent>
        </RentItem>
        <RentItem>
          <Image src={Minivant} />
          <Title>MINIVAN</Title>
          <TitleAccent>$33- $290</TitleAccent>
        </RentItem>
      </RentContainer>
      <BtnWrapper>
        <Button
          title="Choose car"
          type="button"
          onClick={() => navigate("/catalog")}
        />
      </BtnWrapper>
    </div>
  );
}

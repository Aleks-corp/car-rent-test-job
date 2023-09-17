import PropTypes from "prop-types";
import imageThumb from "../../assets/thumb.png";
import {
  ItemContainer,
  Image,
  Title,
  ImageContainer,
  ImageWrapper,
  TitleContainer,
  Description,
  DescriptionWrapper,
} from "./CatalogItem.styled";
import { Button } from "../Button/Button";
export const CatalogItem = ({ item }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    engineSize,
    mileage,
  } = item;
  const location = address.split(", ").slice(1, 3).join(" | ");
  const mile = mileage.toLocaleString("en-IN");

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={img ? img : imageThumb} />
        <ImageWrapper />
      </ImageContainer>
      <TitleContainer>
        <Title>{`${make}, ${year}`}</Title>
        <Title>{rentalPrice}</Title>
      </TitleContainer>
      <DescriptionWrapper>
        <Description>{`${location} | ${rentalCompany}`}</Description>
        <Description>{`${type}  |  ${model}  |  ${engineSize}  |  ${mile}`}</Description>
      </DescriptionWrapper>
      <Button title="Learn more" type="button" onClick={() => {}} />
    </ItemContainer>
  );
};

CatalogItem.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }),
};

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
  FavoritesIconContainer,
} from "./CatalogItem.styled";
import { Button } from "../Button/Button";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectShowModal } from "../../redux/selectors";
import { isShownModal, setModalItem } from "../../redux/catalog/catalogSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/favoritesSlise";

export const CatalogItem = ({ item, favoriteIcon }) => {
  const showModal = useSelector(selectShowModal);
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
  const dispatch = useDispatch();
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={img ? img : imageThumb} />
        <ImageWrapper />
        <FavoritesIconContainer
          type="button"
          onClick={
            !favoriteIcon
              ? () => dispatch(addToFavorites(item))
              : () => dispatch(removeFromFavorites(item.id))
          }
        >
          {favoriteIcon ? <FaHeart /> : <FiHeart />}
        </FavoritesIconContainer>
      </ImageContainer>
      <TitleContainer>
        <Title>{`${make}, ${year}`}</Title>
        <Title>{rentalPrice}</Title>
      </TitleContainer>
      <DescriptionWrapper>
        <Description>{`${location} | ${rentalCompany}`}</Description>
        <Description>{`${type}  |  ${model}  |  ${engineSize}  |  ${mile}`}</Description>
      </DescriptionWrapper>
      <Button
        title="Learn more"
        type="button"
        onClick={() => {
          dispatch(isShownModal(!showModal));
          dispatch(setModalItem(item));
        }}
      />
    </ItemContainer>
  );
};

CatalogItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
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
  favoriteIcon: PropTypes.bool.isRequired,
};

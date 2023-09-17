import { useDispatch, useSelector } from "react-redux";
import { selectModalItem } from "../../redux/selectors.js";
import { ModalContainer } from "./ModalItem.styled.js";
import imageThumb from "../../assets/thumb.png";
import { RiCloseLine } from "react-icons/ri";
import { isShownModal } from "../../redux/catalog/catalogSlice";
import { selectShowModal } from "../../redux/selectors";
import {
  Image,
  ImageContainer,
  TitleContainer,
  Title,
  ModelTitle,
  Description,
  Text,
  TextWrapper,
  TextTitle,
  ConditionItem,
  ConditionContainer,
  ConditionAccent,
  CallLink,
  CloseBtn,
} from "./ModalItem.styled.js";

export const ModalItem = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(selectShowModal);

  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    fuelConsumption,
    address,
    description,
    rentalConditions,
    type,
    engineSize,
    mileage,
    accessories,
    functionalities,
  } = useSelector(selectModalItem);

  const location = address.split(", ").slice(1, 3).join(" | ");
  const accessoriesString = accessories.join(" | ");
  const functionalitiesString = functionalities.join(" | ");
  const conditions = rentalConditions.split("\n");
  const mile = mileage.toLocaleString("en-IN");
  return (
    <ModalContainer>
      <ImageContainer>
        <Image src={img ? img : imageThumb} />
        <CloseBtn
          type="button"
          onClick={() => dispatch(isShownModal(!showModal))}
        >
          <RiCloseLine size={24} />
        </CloseBtn>
      </ImageContainer>
      <TitleContainer>
        <Title>{make}</Title>&nbsp;
        <ModelTitle>{model}</ModelTitle>
        <Title>{`, ${year}`}</Title>
      </TitleContainer>
      <TextWrapper>
        <Text>{`${location} | Id: ${id} | Year: ${year} | Type: ${type}`}</Text>
        <Text>{`Fuel Consumption: ${fuelConsumption}  |  Engine Size: ${engineSize}`}</Text>
      </TextWrapper>
      <Description>{description}</Description>
      <TextWrapper>
        <TextTitle>Accessories and functionalities:</TextTitle>
        <Text>{accessoriesString}</Text>
        <Text>{functionalitiesString}</Text>
      </TextWrapper>
      <TextTitle>Rental Conditions:</TextTitle>
      <ConditionContainer>
        {conditions.map((item, index) => {
          if (isNaN(parseInt(item.slice(-2)))) {
            return <ConditionItem key={index}>{item}</ConditionItem>;
          } else {
            const text = item.slice(0, -2);
            const age = item.slice(-2);
            return (
              <ConditionItem key={index}>
                {text}
                <ConditionAccent>{age}</ConditionAccent>
              </ConditionItem>
            );
          }
        })}
        <ConditionItem>
          Mileage:&nbsp;<ConditionAccent>{mile}</ConditionAccent>
        </ConditionItem>
        <ConditionItem>
          Price:&nbsp;
          <ConditionAccent>{rentalPrice}</ConditionAccent>
        </ConditionItem>
      </ConditionContainer>
      <CallLink href="tel:+380730000000">Rental car</CallLink>
    </ModalContainer>
  );
};

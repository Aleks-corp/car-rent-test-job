import Shield from "../../assets/icons/majesticons_shield.svg";
import Game from "../../assets/icons/game-icons_gps.svg";
import Seat from "../../assets/icons/icon-park-outline_baby-car-seat.svg";
import Mic from "../../assets/icons/ep_service.svg";
import {
  DecriptionTitle,
  DecriptionTitleAccent,
  DecriptionContainer,
  DecriptionItem,
  Title,
  Text,
} from "./HomeDescription.styled";

export const HomeDescription = () => {
  return (
    <div>
      <DecriptionTitle>
        With us you can <DecriptionTitleAccent>be sure </DecriptionTitleAccent>
        of the <DecriptionTitleAccent>result</DecriptionTitleAccent>
      </DecriptionTitle>
      <DecriptionContainer>
        <DecriptionItem>
          <img src={Shield} width={54} />
          <Title>Car insurance</Title>
          <Text>
            Travel calmly and safely - we take all risks upon ourselves, because
            the entire fleet of cars that we offer is fully insured.
          </Text>
        </DecriptionItem>
        <DecriptionItem>
          <img src={Game} width={54} />
          <Title>GPS navigator</Title>
          <Text>
            Dont get lost and save time with the help of a GPS navigator that
            will tell you the optimal route.
          </Text>
        </DecriptionItem>
        <DecriptionItem>
          <img src={Seat} width={54} />
          <Title>Baby chair</Title>
          <Text>
            Traveling with children? Keep your little ones safe with a
            comfortable child seat.
          </Text>
        </DecriptionItem>
        <DecriptionItem>
          <img src={Mic} width={54} />
          <Title>Help on the road</Title>
          <Text>
            Running out of fuel? Need to change a tire or charge your battery?
            Let us know and our specialists will come and help you.
          </Text>
        </DecriptionItem>
      </DecriptionContainer>
    </div>
  );
};

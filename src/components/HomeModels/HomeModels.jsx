import { ModelTitle, ModelContainer } from "./HomeModels.styled";
import { LOGO_LIST } from "../../constants/logoList";

export const HomeModels = () => {
  return (
    <div>
      <ModelTitle>Available car brands</ModelTitle>
      <ModelContainer>
        {LOGO_LIST.map((item) => (
          <img key={item.id} src={item.path} width={130} />
        ))}
      </ModelContainer>
    </div>
  );
};

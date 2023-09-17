import { ThreeDots } from "react-loader-spinner";
import { LoaderContainer } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="48"
        color="#0B44CD"
        ariaLabel="watch-loading"
        visible={true}
      />
    </LoaderContainer>
  );
};

import { Spinner, SpinnerContainer, LoadingText } from "./styled.js";

export const Loading = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      <LoadingText>Loading... Please wait</LoadingText>
    </SpinnerContainer>
  );
};

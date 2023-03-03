import { Spinner, SpinnerContainer}  from "./styled.js";

export const Loading = () => {
  return (
    <SpinnerContainer>
      <Spinner />
      Loading... Please wait 
    </SpinnerContainer>
  );
};



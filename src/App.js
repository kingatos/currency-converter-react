import Form from "./Form"
import styled from "styled-components";

export const StyledContainer = styled.div`
    margin: auto;
    max-width: 500px;
    padding: 100px 0;
`;

function App() {
  return (
    <StyledContainer>
      <Form />
    </StyledContainer>
  );
}
export default App;


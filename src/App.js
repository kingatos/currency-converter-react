import Form from "./Form"
import styled from "styled-components";

export const Wrapper = styled.div`
    margin: auto;
    max-width: 500px;
    padding: 100px 0;
`;

function App() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}
export default App;


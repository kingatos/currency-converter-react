import { createGlobalStyle } from "styled-components";
import backgroundPhoto from "../src/background.jpg";

const GlobalStyles = createGlobalStyle`
html {
  box-sizing: border-box;
}
  
*, ::after, ::before {
  box-sizing: inherit;
}

#root {
  flex: 0 1 auto;
  align-items: center;
  justify-content: center;
  font-family: "Raleway", sans-serif;
  line-height: 1.5;
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  font-size: 15px;
  min-height: 100vh;
  background-image: url("${backgroundPhoto}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
`;
export default GlobalStyles;

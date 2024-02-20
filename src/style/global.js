import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0%;
    box-sizing: border-box;
  }

  body {
    font-family: "Nunito", sans-serif;

    background-color: ${({ theme }) => theme.COLOR.BLACK_900};
  }
`;
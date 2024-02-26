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

  .notSelectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default; 
  }
`;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;
    line-height: 1;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  button {
    cursor: pointer;
  }

`
export default GlobalStyle;
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    font-size: 62.5%;
    line-height: 1;

    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


`
export default GlobalStyle;
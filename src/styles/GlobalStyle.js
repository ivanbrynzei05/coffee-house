// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Merienda';
    src: url('../../fonts/Merienda-Bold.woff2') format('woff2'),
         url('../../fonts/Merienda-Bold.woff') format('woff'),
         url('../../fonts/Merienda-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Merienda';
    src: url('../../fonts/Merienda-Regular.woff2') format('woff2'),
         url('../../fonts/Merienda-Regular.woff') format('woff'),
         url('../../fonts/Merienda-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Merienda', sans-serif;
    font-weight: normal;
  }
`;

export default GlobalStyle;

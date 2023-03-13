import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: url('../src/assets/img/bg-desktop.jpg') no-repeat top;
    background-size: cover;
    font-family: ${({ theme }) => theme.fontFamilies.textMedium};
    color: ${({ theme }) => theme.colors.body};
    font-size: 16px;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;

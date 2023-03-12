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
    background-color: ${({ theme }) => theme.colors.body};
    font-family: ${({ theme }) => theme.fontFamilies.medium};
  }
`;

export default GlobalStyle;

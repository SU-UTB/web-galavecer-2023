import { createGlobalStyle } from 'styled-components';
import bgDesktop from '../assets/img/bg-desktop.jpg';
import bgMobile from '../assets/img/bg-mobile.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) -8.93%, rgba(0, 0, 0, 0.68) 31.15%, rgba(0, 0, 0, 0.68) 65.89%, rgba(0, 0, 0, 0) 110.18%), url(${bgMobile}) no-repeat top;
    background-size: cover;
    font-family: ${({ theme }) => theme.fontFamilies.textMedium};
    color: ${({ theme }) => theme.colors.body};
    font-size: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      background: linear-gradient(90deg, rgba(0, 0, 0, 0) -8.93%, rgba(0, 0, 0, 0.68) 31.15%, rgba(0, 0, 0, 0.68) 65.89%, rgba(0, 0, 0, 0) 110.18%), url(${bgDesktop}) no-repeat top;
      font-size: 22px;
      background-size: cover;
    }
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;

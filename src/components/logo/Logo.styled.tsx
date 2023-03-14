import styled from 'styled-components';

export const MenuLogoLink = styled.a`
  display: none;
  text-decoration: none;
  cursor: pointer;

  img {
    width: auto;
    max-height: 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MainLogoImg = styled.img`
  width: auto;
  height: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 26vh;
  }
`;

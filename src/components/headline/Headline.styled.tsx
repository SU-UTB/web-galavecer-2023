import styled from 'styled-components';

type Props = {
  desktopHidden?: boolean;
};

export const MainHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  font-size: ${({ theme }) => theme.headingSizes.h1.mobile};
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 2px;
  text-align: center;
  margin: 3rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h1.desktop};
    margin-bottom: 4rem;
  }

  .hidden {
    display: none;
  }

  img {
    filter: drop-shadow(0px 4px 100px #000000)
      drop-shadow(0px 0px 250px #000000);
    z-index: -1;
  }

  span {
    position: relative;
    top: 20px;
  }
`;

export const SecondaryHeading = styled.h2<Props>`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  font-size: ${({ theme }) => theme.headingSizes.h2.mobile};
  letter-spacing: 2px;
  text-align: center;
  margin: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h2.desktop};
    display: ${({ desktopHidden }) =>
      desktopHidden ? 'none' : 'inline-block'};
  }
`;

import styled from 'styled-components';

export const MainHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  font-size: ${({ theme }) => theme.headingSizes.h1.mobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h1.desktop};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  letter-spacing: 2px;
  text-align: center;

  .hidden {
    display: none;
  }

  span {
    position: relative;
    top: -80px;
  }
`;

export const SecondaryHeading = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  font-size: ${({ theme }) => theme.headingSizes.h2.mobile};
  letter-spacing: 2px;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h2.desktop};
  }
`;

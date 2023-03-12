import styled from 'styled-components';

export const MainHeading = styled.h1`
  font-size: ${({ theme }) => theme.headingSizes.h1.mobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h1.desktop};
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  letter-spacing: 2px;

  .hidden {
    display: none;
  }

  span {
    position: relative;
    top: -80px;
  }
`;

export const SecondaryHeading = styled.h2`
  font-size: ${({ theme }) => theme.headingSizes.h2.mobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.headingSizes.h2.desktop};
  }

  letter-spacing: 2px;
`;

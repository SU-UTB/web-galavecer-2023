import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.footer};
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.footer};
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  gap: 2rem 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 4rem 2rem;
  }
`;

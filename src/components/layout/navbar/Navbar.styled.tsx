import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.header};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1600px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem 0;
    flex-direction: row;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    margin-top: 1rem;
    padding: 0;
    height: 100%;
    gap: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin: 0;
    }
  }
`;

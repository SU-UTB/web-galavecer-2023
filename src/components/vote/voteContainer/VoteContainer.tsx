import styled from 'styled-components';

export const VoteContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  items-align: center;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

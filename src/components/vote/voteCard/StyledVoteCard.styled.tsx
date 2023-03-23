import styled from 'styled-components';

export const StyledVoteCard = styled.div`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: 2rem;
  border-radius: 23px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  width: 272px;

  p {
    font-size: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 18px;
    }
  }
`;

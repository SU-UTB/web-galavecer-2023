import styled from 'styled-components';

export const StyledVoteSection = styled.section`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;

  p {
    text-align: center;
    letter-spacing: 2px;
  }
`;

export const StyledRulesSection = styled.section`
  padding: 0 1rem;

  ol {
    margin: 2rem 0;
    list-style-type: upper-roman;
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const StyledPersonalInfoSection = styled.section`
  padding: 0 2rem;
  max-width: ${({ theme }) => theme.breakpoints.desktop};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 70vh;
    overflow-y: scroll;
  }

  ol {
    margin: 2rem 0;
    max-width: 100%;
    list-style-type: upper-roman;
    li {
      margin-bottom: 1rem;
    }
  }
`;

export const StyledPartnersSection = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 3rem 0 8rem;
  background-color: #ffffff;
  border-radius: 23px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 3rem;
      grid-template-columns: 1fr 1fr;
    }

    img {
      width: auto;
      height: 50px;
    }
  }
`;

export const ImportantText = styled.span`
  color: #ff5b5b;
`;

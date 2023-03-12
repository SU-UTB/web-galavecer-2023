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

export const ImportantText = styled.span`
  color: #ff5b5b;
`;

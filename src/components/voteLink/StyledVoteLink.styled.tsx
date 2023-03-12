import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledVoteLink = styled(Link)`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: 1rem 1.8rem;
  border-radius: 23px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-family: ${({ theme }) => theme.fontFamilies.semibold};
  font-size: 36px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 46px;
  }
`;

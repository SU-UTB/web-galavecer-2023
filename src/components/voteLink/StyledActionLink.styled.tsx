import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  paddingXVal?: number;
  paddingYVal?: number;
};

export const StyledActionLink = styled(Link)<Props>`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: ${({ paddingXVal }) => paddingXVal || 1}rem
    ${({ paddingYVal }) => paddingYVal || 1.8}rem;
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

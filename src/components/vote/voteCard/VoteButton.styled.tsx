import styled from 'styled-components';

type Props = {
  paddingXVal?: number;
  paddingYVal?: number;
};

export const VoteButton = styled.button<Props>`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: ${({ paddingXVal }) => paddingXVal || 0.4}rem
    ${({ paddingYVal }) => paddingYVal || 1.2}rem;
  border-style: solid;
  border-radius: 23px;
  border: 2px solid black;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  font-family: ${({ theme }) => theme.fontFamilies.headlineSemibold};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }
`;

import styled from 'styled-components';

export const ShowMoreButton = styled.button`
  background: #ffffff;
  color: #000000;
  text-align: center;
  border: none;
  letter-spacing: 2px;
  text-decoration: underline;
  display: inline-block;
  font-family: ${({ theme }) => theme.fontFamilies.headlineSemibold};
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;

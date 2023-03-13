import styled from 'styled-components';

export const NavListItem = styled.li`
  a {
    font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

import styled from 'styled-components';

type Props = {
  imgHeight: number;
};

export const SocialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledSocialItem = styled.a<Props>`
  display: block;
  margin: 0 1rem;

  img {
    width: auto;
    height: ${({ imgHeight }) => imgHeight}px;
  }
`;

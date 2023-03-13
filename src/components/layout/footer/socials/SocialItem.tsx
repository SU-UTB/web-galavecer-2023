import TSocialLinkItem from '../../../../lib/types/TSocialLinkItem';
import { StyledSocialItem } from './Socials.styled';

const SocialItem = ({ link, imgSrc, imgAlt, imgHeight }: TSocialLinkItem) => {
  return (
    <StyledSocialItem href={link} target="_blank" imgHeight={imgHeight}>
      <img src={imgSrc} alt={imgAlt} />
    </StyledSocialItem>
  );
};

export default SocialItem;

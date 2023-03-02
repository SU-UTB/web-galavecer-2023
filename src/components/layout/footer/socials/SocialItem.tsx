import TSocialLinkItem from '../../../../lib/types/TSocialLinkItem';

const SocialItem = ({ link, imgSrc, imgAlt }: TSocialLinkItem) => {
  return (
    <a href={link} target="_blank">
      <img src={imgSrc} alt={imgAlt} />
    </a>
  );
};

export default SocialItem;

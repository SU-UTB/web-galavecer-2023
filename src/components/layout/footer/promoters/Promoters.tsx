import SocialItem from '../socials/SocialItem';

import { SocialsContainer } from '../socials/Socials.styled';

import suIcon from '../../../../assets/img/icons/su-w.svg';
import utbIcon from '../../../../assets/img/icons/utb-w.svg';

const Promoters = () => {
  return (
    <SocialsContainer>
      <SocialItem
        link="https://sutb.cz/"
        imgSrc={suIcon}
        imgAlt="Studentska unie UTB"
        imgHeight={32}
      />
      <SocialItem
        link="https://utb.cz/"
        imgSrc={utbIcon}
        imgAlt="Univerzita Tomáše Bati"
        imgHeight={32}
      />
    </SocialsContainer>
  );
};

export default Promoters;

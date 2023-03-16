import SocialItem from './SocialItem';
import { SocialsContainer } from './Socials.styled';

import fbIcon from '../../../../assets/img/icons/fb-w.svg';
import igIcon from '../../../../assets/img/icons/ig-w.svg';

const Socials = () => {
  return (
    <SocialsContainer>
      <SocialItem
        link="https://www.instagram.com/studentskaunieutb/"
        imgSrc={igIcon}
        imgAlt="IG - Studentska unie UTB"
        imgHeight={32}
      />
      <SocialItem
        link="https://www.facebook.com/studentskaunieutb"
        imgSrc={fbIcon}
        imgAlt="FB - Studentska unie UTB"
        imgHeight={32}
      />
    </SocialsContainer>
  );
};

export default Socials;

import { FooterContainer } from './Footer.styled';
import Promoters from './promoters/Promoters';
import Socials from './socials/Socials';

const Footer = () => {
  return (
    <FooterContainer>
      <Socials />
      <Promoters />
    </FooterContainer>
  );
};

export default Footer;

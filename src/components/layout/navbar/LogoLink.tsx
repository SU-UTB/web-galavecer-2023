import LogoImg from '../../../assets/img/logo-w.svg';
import { MenuLogoLink } from '../../logo/Logo.styled';

const LogoLink = () => {
  return (
    <MenuLogoLink href="/">
      <img src={LogoImg} alt="Galavečer 2023 logo" />
    </MenuLogoLink>
  );
};

export default LogoLink;

import LogoImg from '../../../../assets/img/logo.svg';
import { LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink href="/">
      <img src={LogoImg} alt="Galavečer 2023 logo" />
    </LogoLink>
  );
};

export default Logo;

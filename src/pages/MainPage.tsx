import LogoImg from '../assets/img/logo.svg';
import { MainLogoImg } from '../components/logo/Logo.styled';

const MainPage = () => {
  return (
    <>
      <MainLogoImg src={LogoImg} alt="Galavečer 2023 logo" />
    </>
  );
};

export default MainPage;

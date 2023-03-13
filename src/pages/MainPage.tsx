import LogoImg from '../assets/img/logo.svg';
import {
  MainHeading,
  SecondaryHeading,
} from '../components/headline/Headline.styled';
import { MainLogoImg } from '../components/logo/Logo.styled';
import AboutSection from '../sections/AboutSection';
import NominateSection from '../sections/NominateSection';

const MainPage = () => {
  return (
    <>
      <MainHeading>
        <span className="hidden">Galavečer</span>
        <MainLogoImg src={LogoImg} alt="Galavečer 2023 logo" />
        <span>Univerzity Tomáše Bati</span>
        <span>11.4.2023</span>
      </MainHeading>
      <SecondaryHeading>Projdi se po červeném koberci!</SecondaryHeading>
      <NominateSection />
      <AboutSection />
    </>
  );
};

export default MainPage;

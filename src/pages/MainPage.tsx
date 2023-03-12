import LogoImg from '../assets/img/logo.svg';
import {
  MainHeading,
  SecondaryHeading,
} from '../components/headline/Headline.styled';
import { MainLogoImg } from '../components/logo/Logo.styled';
import VoteSection from '../sections/VoteSection';

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
      <VoteSection />
    </>
  );
};

export default MainPage;

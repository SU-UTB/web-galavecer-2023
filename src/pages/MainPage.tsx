import LogoImg from '../assets/img/logo-w.svg';
import {
  MainHeading,
  SecondaryHeading,
} from '../components/headline/Headline.styled';
import { MainLogoImg } from '../components/logo/Logo.styled';
import AboutSection from '../sections/AboutSection';
import NominateSection from '../sections/NominateSection';
import VoteSection from '../sections/VoteSection';

const MainPage = () => {
  return (
    <>
      <MainHeading>
        <span className="hidden">Galavečer</span>
        <MainLogoImg
          src={LogoImg}
          alt="Galavečer 2023 logo"
          width={441}
          height={116}
        />
        <span>Univerzity Tomáše Bati</span>
        <span>11.&nbsp;4.&nbsp;2023</span>
      </MainHeading>
      <SecondaryHeading>Projdi se po červeném koberci!</SecondaryHeading>
      <VoteSection />
      <AboutSection />
    </>
  );
};

export default MainPage;

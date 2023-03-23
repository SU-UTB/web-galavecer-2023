import LogoImg from '../assets/img/logo-w.svg';
import {
  MainHeading,
  SecondaryHeading,
} from '../components/headline/Headline.styled';
import { MainLogoImg } from '../components/logo/Logo.styled';
import { DISABLE_VOTING_DATE } from '../lib/constants';
import AboutSection from '../sections/AboutSection';
import VoteSection from '../sections/VoteSection';
import { displayVoteSection } from '../utils/displayVoteSection';

const MainPage = () => {
  console.log(displayVoteSection);

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

      {displayVoteSection && <VoteSection />}
      <AboutSection />
    </>
  );
};

export default MainPage;

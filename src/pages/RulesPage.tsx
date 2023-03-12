import BackLink from '../components/BackLink';
import { SecondaryHeading } from '../components/headline/Headline.styled';
import RulesSection from '../sections/RulesSection';
import VoteSection from '../sections/VoteSection';

const RulesPage = () => {
  return (
    <>
      <SecondaryHeading>
        Pravidla nominací <br /> Galavečer 2023
      </SecondaryHeading>
      <RulesSection />
      <VoteSection />
      <BackLink />
    </>
  );
};

export default RulesPage;

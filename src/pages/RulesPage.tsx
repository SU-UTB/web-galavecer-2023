import BackLink from '../components/actionLink/BackLink';
import { SecondaryHeading } from '../components/headline/Headline.styled';
import RulesSection from '../sections/RulesSection';
import VoteSection from '../sections/VoteSection';
import { displayVoteSection } from '../utils/displayVoteSection';

const RulesPage = () => {
  return (
    <>
      <SecondaryHeading>
        Pravidla nominací <br /> Galavečer 2023
      </SecondaryHeading>
      <RulesSection />
      {displayVoteSection && <VoteSection />}
      <BackLink />
    </>
  );
};

export default RulesPage;

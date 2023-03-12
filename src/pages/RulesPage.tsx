import BackLink from '../components/actionLink/BackLink';
import { SecondaryHeading } from '../components/headline/Headline.styled';
import NominateSection from '../sections/NominateSection';
import RulesSection from '../sections/RulesSection';

const RulesPage = () => {
  return (
    <>
      <SecondaryHeading>
        Pravidla nominací <br /> Galavečer 2023
      </SecondaryHeading>
      <RulesSection />
      <NominateSection />
      <BackLink />
    </>
  );
};

export default RulesPage;

import NominateLink from '../components/actionLink/NominateLink';
import { StyledVoteSection } from './Sections.styled';

const NominateSection = () => {
  return (
    <StyledVoteSection id="nominuj">
      <NominateLink />
      <p>
        Nominace končí 21.3. 2023
        <br />
        ve 12:00 h
      </p>
    </StyledVoteSection>
  );
};

export default NominateSection;

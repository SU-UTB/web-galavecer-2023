import VoteLink from '../components/actionLink/VoteLink';
import { StyledVoteSection } from './Sections.styled';

const NominateSection = () => {
  return (
    <StyledVoteSection id="nominuj">
      <VoteLink />
      <p>
        Nominace končí 21.3. 2023
        <br />
        ve 12:00 h
      </p>
    </StyledVoteSection>
  );
};

export default NominateSection;

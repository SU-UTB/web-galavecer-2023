import VoteLink from '../components/actionLink/VoteLink';
import { StyledVoteSection } from './Sections.styled';

const VoteSection = () => {
  return (
    <StyledVoteSection id="hlasuj">
      <VoteLink />
      <p>
        Hlasování končí 28. 3. 2023
        <br />
        ve 12:00 h
      </p>
    </StyledVoteSection>
  );
};

export default VoteSection;

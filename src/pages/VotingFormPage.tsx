import FormVoting from '../components/form/FormModalVote';
import VoteCard from '../components/vote/voteCard/VoteCard';
import { VoteContainer } from '../components/vote/voteContainer/VoteContainer';

import { voteItems } from '../sections/VoteSection.content';

const VotingFormPage = () => {
  return (
    <>
      <VoteContainer>
        {voteItems.map(
          ({ id, name, facultyAbbrev, facultyImg, achievements }) => (
            <VoteCard
              key={id}
              id={id}
              name={name}
              facultyAbbrev={facultyAbbrev}
              facultyImg={facultyImg}
              achievements={achievements}
            />
          ),
        )}
      </VoteContainer>
    </>
  );
};

export default VotingFormPage;

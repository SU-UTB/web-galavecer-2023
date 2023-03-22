import { TVoteItem } from '../../../lib/types/TVoteItem';
import { StyledVoteCard } from './StyledVoteCard.styled';
import { VoteButton } from './VoteButton.styled';

const VoteCard = ({
  id,
  name,
  facultyAbbrev,
  facultyImg,
  achievements,
}: TVoteItem) => {
  const handleOpenVoteModal = (voteId: number) => {
    console.log(voteId);
  };

  return (
    <StyledVoteCard>
      <div>
        <img src={facultyImg} alt={facultyAbbrev} />
        <h5>FAI</h5>
      </div>
      <h4>{name}</h4>
      <p>{achievements}</p>
      {id && (
        <VoteButton onClick={() => handleOpenVoteModal(id)}>Hlasuj</VoteButton>
      )}
    </StyledVoteCard>
  );
};

export default VoteCard;

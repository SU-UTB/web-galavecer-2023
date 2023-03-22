import { useState } from 'react';
import { IVoteItem } from '../../../lib/interfaces/IVoteItem';
import FormModalVote from '../../form/FormModalVote';
import { ShowMoreButton } from './ShowMoreButton.styled';
import { StyledVoteCard } from './StyledVoteCard.styled';
import { VoteButton } from './VoteButton.styled';

const VoteCard = (voteItem: IVoteItem) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [isVoteFormOpen, setIsVoteFormOpen] = useState<boolean>(false);

  return (
    <>
      <StyledVoteCard>
        <div>
          <img src={voteItem.facultyImg} alt={voteItem.facultyAbbrev} />
          <h5>FAI</h5>
        </div>
        <h4>{voteItem.name}</h4>
        <p>
          {showMore
            ? voteItem.achievements
            : `${voteItem.achievements.substring(0, 50)}`}
        </p>
        <ShowMoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? 'zobraz méně' : 'zobraz více'}
        </ShowMoreButton>
        {voteItem.id && (
          <VoteButton onClick={() => setIsVoteFormOpen(true)}>
            Hlasuj
          </VoteButton>
        )}
      </StyledVoteCard>
      {isVoteFormOpen && (
        <FormModalVote
          voteItem={voteItem}
          closeModalOnClick={() => {
            setIsVoteFormOpen(false);
          }}
        />
      )}
    </>
  );
};

export default VoteCard;

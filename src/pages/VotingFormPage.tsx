import VoteCard from '../components/vote/voteCard/VoteCard';
import { VoteContainer } from '../components/vote/voteContainer/VoteContainer';
import useFetchNominees from '../hooks/useFetchNominees';

const VotingFormPage = () => {
  const { data: voteItems, isLoading, error } = useFetchNominees();
  return (
    <>
      {isLoading && <p>Nahrávám údaje...</p>}
      <VoteContainer>
        {Array.isArray(voteItems) &&
          voteItems.map(
            ({ id, first_name, last_name, achievements, faculty }) => (
              <VoteCard
                key={id}
                id={id}
                first_name={first_name}
                last_name={last_name}
                achievements={achievements}
                faculty={faculty}
              />
            ),
          )}
      </VoteContainer>
    </>
  );
};

export default VotingFormPage;

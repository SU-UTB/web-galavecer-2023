import BackArrowImg from '../assets/img/icons/arrow-back.svg';
import { StyledActionLink } from './voteLink/StyledActionLink.styled';

const BackLink = () => {
  return (
    <StyledActionLink to="/" desktopHidden={true}>
      <img src={BackArrowImg} alt="šipka zpátky" />
    </StyledActionLink>
  );
};

export default BackLink;

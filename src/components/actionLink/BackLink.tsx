import BackArrowImg from '../../assets/img/icons/arrow-back.svg';
import { StyledBackLink } from './StyledActionLink.styled';

const BackLink = () => {
  return (
    <StyledBackLink to="/">
      <img src={BackArrowImg} alt="šipka zpátky" />
    </StyledBackLink>
  );
};

export default BackLink;

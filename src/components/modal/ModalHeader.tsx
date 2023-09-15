import { StyledModalHeader } from './StyledModalHeader.styled';

interface Props {
  closeModal: () => void;
}

const ModalHeader = ({ closeModal }: Props) => {
  return (
    <StyledModalHeader>
      <button className="outline-none" onClick={closeModal}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 5L5 25"
            stroke="black"
            strokeWidth="4.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 5L25 25"
            stroke="black"
            strokeWidth="4.16667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </StyledModalHeader>
  );
};

export default ModalHeader;

import styled from 'styled-components';

export const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular}
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 4rem 0;
  gap: 2rem 0;

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.5rem 0.25rem;
    border-radius: 0.5rem;
    outline: none;
    background: #ffffff;
    border: none;
  }
`;

export const StyledInput = styled.input`
  margin-bottom: 0.5rem;
`;

export const StyledSelect = styled.select`
  margin-bottom: 0.5rem;
`;

export const StyledSubmitButton = styled.button`
  padding: 1rem 0.5rem;
  background: #ffffff;
  color: #000000;
  text-align: center;
  text-transform: uppercase;
  border-radius: 23px;
  border: none;
`;

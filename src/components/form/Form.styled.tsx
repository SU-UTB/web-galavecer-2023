import styled from 'styled-components';

interface InputProps {
  bordered?: boolean;
}

export const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3rem 0;
  padding: 2rem;
  align-items: center;
  background: #ffffff;
  color: #000000;
  border-radius: 23px;

  input[type='text'],
  input[type='email'],
  select,
  textarea {
    padding: 0.8rem 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    background: #ffffff;
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-size: 18px;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-width: 300px;
      margin-bottom: 0;
    }
  }
`;

export const StyledFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
  width: 100%;
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  justify-content: flex-start;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0 1rem;
  }
`;

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  border: ${({ bordered }) => (bordered ? '2px solid black' : 'none')};
`;

export const StyledCheckbox = styled.input`
  width: auto;
  margin-right: 1rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const StyledSelect = styled.select`
  width: 100%;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
`;

export const StyledLabel = styled.label`
  cursor: pointer;
  a {
    color: #000000;
    text-decoration: underline;
  }
`;

export const StyledSubmitButton = styled.button`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: 0.8rem 1.6rem;
  border-radius: 23px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamilies.headlineSemibold};
  font-size: 26px;
  font-weight: 600;
  border: 2px solid #000000;
  max-width: 300px;
  align-self: flex-start;
  cursor: pointer;
`;

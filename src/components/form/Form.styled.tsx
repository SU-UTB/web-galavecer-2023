import styled from 'styled-components';

export const StyledForm = styled.form`
  font-family: ${({ theme }) => theme.fontFamilies.headlineRegular};
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 4rem 0;
  gap: 3rem 0;
  min-height: 60vh;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }

  input,
  select,
  textarea {
    padding: 0.8rem 0.5rem;
    border-radius: 0.5rem;
    outline: none;
    background: #ffffff;
    border: none;
    margin-bottom: 0.5rem;

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
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 0 1rem;
  }
`;

export const StyledInput = styled.input`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
`;

export const StyledSubmitButton = styled.button`
  background: #ffffff;
  color: #000000;
  text-align: center;
  padding: 1rem 1.8rem;
  border-radius: 23px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamilies.headlineSemibold};
  font-size: 36px;
  font-weight: 600;
  border: none;
  max-width: 300px;
  align-self: flex-start;
`;

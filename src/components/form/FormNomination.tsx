import { useState } from 'react';
import { IFormNominationData } from '../../lib/interfaces/IFormNominationData';
import {
  StyledForm,
  StyledFormGroup,
  StyledFormRow,
  StyledInput,
  StyledSelect,
  StyledSubmitButton,
  StyledTextarea,
} from './Form.styled';

const INITIAL_DATA: IFormNominationData = {
  firstName: '',
  lastName: '',
  email: '',
  facultyNominated: 0,
  firstNameNominated: '',
  lastNameNominated: '',
  achievementsNominated: '',
};

const FormNomination = () => {
  const [data, setData] = useState<IFormNominationData>(INITIAL_DATA);
  const updateFields = (fields: Partial<IFormNominationData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: implement submit
    e.preventDefault();
    console.log('form submitted:');
    console.log(data);
    setData(INITIAL_DATA);
  };

  return (
    <StyledForm onSubmit={submitForm}>
      <StyledFormGroup>
        <StyledFormRow>
          <StyledInput
            type="text"
            name="firstNameNominated"
            placeholder="Jméno nominovaného"
            required
            value={data.firstNameNominated}
            onChange={(e) =>
              updateFields({ firstNameNominated: e.target.value })
            }
          />
          <StyledInput
            type="text"
            name="lastNameNominated"
            placeholder="Příjmení nominovaného"
            required
            value={data.lastNameNominated}
            onChange={(e) =>
              updateFields({ lastNameNominated: e.target.value })
            }
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledSelect
            name="facultyNominated"
            id="facultyNominated"
            required
            value={data.facultyNominated}
            onChange={(e) =>
              updateFields({ facultyNominated: Number(e.target.value) })
            }
          >
            <option value="0" disabled>
              Fakulta nominovaného
            </option>
            <option value="1">FAI</option>
            <option value="2">FMK</option>
            <option value="3">FHS</option>
          </StyledSelect>
        </StyledFormRow>
        <StyledFormRow>
          <StyledTextarea
            name="achievementsNominated"
            id="achievementsNominated"
            placeholder="Dúvod k nominaci"
            required
            value={data.achievementsNominated}
            onChange={(e) =>
              updateFields({ achievementsNominated: e.target.value })
            }
          ></StyledTextarea>
        </StyledFormRow>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledFormRow>
          <StyledInput
            type="text"
            placeholder="Jméno"
            name="firstName"
            id="firstName"
            required
            value={data.firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
          />
          <StyledInput
            type="text"
            placeholder="Příjmení"
            name="lastName"
            id="lastName"
            required
            value={data.lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
          />
        </StyledFormRow>
        <StyledFormRow>
          <StyledInput
            type="email"
            name="email"
            id="email"
            placeholder="Univerzitní e-mail"
            required
            value={data.email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </StyledFormRow>
      </StyledFormGroup>
      <StyledSubmitButton type="submit">Nominovat</StyledSubmitButton>
    </StyledForm>
  );
};

export default FormNomination;

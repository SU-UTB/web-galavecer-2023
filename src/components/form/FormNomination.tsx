import { useState } from 'react';
import { IFormNominationData } from '../../lib/interfaces/IFormNominationData';
import {
  StyledForm,
  StyledInput,
  StyledSelect,
  StyledSubmitButton,
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
      <div>
        <StyledInput
          type="text"
          name="firstNameNominated"
          placeholder="Jméno nominovaného"
          required
          value={data.firstNameNominated}
          onChange={(e) => updateFields({ firstNameNominated: e.target.value })}
        />
        <StyledInput
          type="text"
          name="lastNameNominated"
          placeholder="Příjmení nominovaného"
          required
          value={data.lastNameNominated}
          onChange={(e) => updateFields({ lastNameNominated: e.target.value })}
        />
      </div>
      <div>
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
      </div>
      <div>
        <textarea
          name="achievementsNominated"
          id="achievementsNominated"
          placeholder="Dúvod k nominaci"
          required
          value={data.achievementsNominated}
          onChange={(e) =>
            updateFields({ achievementsNominated: e.target.value })
          }
        ></textarea>
      </div>
      <div>
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
      </div>
      <div>
        <StyledInput
          type="email"
          name="email"
          id="email"
          placeholder="Univerzitní e-mail"
          required
          value={data.email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <StyledSubmitButton type="submit">Nominovat</StyledSubmitButton>
    </StyledForm>
  );
};

export default FormNomination;

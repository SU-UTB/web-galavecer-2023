import { AxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { api } from '../../api';
import { IFormVoteData } from '../../lib/interfaces/IFormVoteData';
import { IVoteItem } from '../../lib/interfaces/IVoteItem';
import ModalHeader from '../modal/ModalHeader';
import { ModalOverlay } from '../modal/ModalOverlay.styled';
import {
  StyledCheckbox,
  StyledForm,
  StyledFormGroup,
  StyledFormRow,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
} from './Form.styled';

const INITIAL_DATA: IFormVoteData = {
  email: '',
  id: null,
  consent: false,
};

interface Props {
  voteItem: IVoteItem;
  closeModalOnClick: () => void;
}

const FormModalVote = ({ voteItem, closeModalOnClick }: Props) => {
  const [data, setData] = useState<IFormVoteData>(INITIAL_DATA);
  const [sendingForm, setSendingForm] = useState<boolean>(false);

  const updateFields = (fields: Partial<IFormVoteData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateFields({ id: Number(voteItem.id) });

    if (!data.consent) {
      return toast.error(
        'K odeslání formulářu je nutné souhlasit se spracováním osobních údajů.',
      );
    }
    try {
      setSendingForm(true);
      const response = await api.post('votes', data);
      if (response.status === 200) {
        toast.success('Formulář úspěšně odeslán.');
        setData(INITIAL_DATA);
      }
    } catch (err: AxiosError | any) {
      if (
        err.response.data.error.toString() ===
        'This email address has already been used!'
      ) {
        toast.error(
          'Tento mail již byl použit. Nelze hlasovat více jak jednou.',
        );
      } else {
        toast.error('Stala se chyba');
      }
    } finally {
      setSendingForm(false);
    }
  };

  return (
    <ModalOverlay>
      <StyledForm onSubmit={submitForm}>
        <ModalHeader closeModal={closeModalOnClick} />
        <StyledFormRow>
          <p>
            Hlasovat za: {voteItem.first_name} {voteItem.last_name}
          </p>
        </StyledFormRow>
        <StyledFormGroup>
          <StyledFormRow>
            <StyledInput
              type="email"
              name="email"
              id="email"
              placeholder="Univerzitní e-mail"
              pattern=".+@utb\.cz"
              title="Prosím, použijte univerznitní mail @utb.cz"
              required
              value={data.email}
              onChange={(e) => updateFields({ email: e.target.value })}
              bordered={true}
            />
          </StyledFormRow>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledFormRow>
            <StyledCheckbox
              type="checkbox"
              name="consent"
              id="consent"
              required
              checked={data.consent}
              onChange={(e) => updateFields({ consent: !data.consent })}
            />
            <StyledLabel htmlFor="consent">
              Souhlasím se spracováním&nbsp;
              <Link to="/osobni-udaje">osobních&nbsp;údajů</Link>
            </StyledLabel>
          </StyledFormRow>
        </StyledFormGroup>
        <StyledSubmitButton disabled={sendingForm} type="submit">
          Hlasovat
        </StyledSubmitButton>
      </StyledForm>
    </ModalOverlay>
  );
};

export default FormModalVote;

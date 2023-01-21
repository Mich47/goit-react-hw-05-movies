import { PropTypes } from 'prop-types';
import { STATUS } from 'constants/status.constants';
import { useState } from 'react';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { removeExtraSpaces } from 'helpers/removeExtraSpaces';
import {
  ButtonIconStyled,
  FormStyled,
  InputStyled,
} from '../Searchbar/Searchbar.styled';

export const Searchbar = ({ onSubmitForm, status }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleErase = () => {
    setSearch('');
  };

  //Прибираємо усі зайві пробіли
  const query = removeExtraSpaces(search);

  return (
    <FormStyled onSubmit={event => onSubmitForm(event, query)}>
      <ButtonIconStyled
        type="submit"
        left={0}
        disabled={status === STATUS.loading}
      >
        <IoSearchOutline />
      </ButtonIconStyled>

      <InputStyled
        name="search"
        value={search}
        type="text"
        autocomplete="off"
        autoFocus
        placeholder="Search movies..."
        onChange={handleChange}
      />

      <ButtonIconStyled type="button" right={0} onClick={handleErase}>
        <IoCloseOutline />
      </ButtonIconStyled>
    </FormStyled>
  );
};

Searchbar.propTypes = {
  status: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

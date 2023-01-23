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

export const Searchbar = ({
  onSubmitForm,
  status = STATUS.success,
  value = '',
}) => {
  const [search, setSearch] = useState(value);

  if (!value) {
    console.log('search ', search);
    console.log('value ', value);
    // setSearch('');
  }

  const handleChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //Прибираємо усі зайві пробіли
    const query = removeExtraSpaces(search);
    setSearch(query);
    // setSearch('');

    onSubmitForm(query);
  };

  const handleErase = () => {
    setSearch('');
  };

  // console.log('Searchbar ', value);
  return (
    <FormStyled onSubmit={handleSubmit}>
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

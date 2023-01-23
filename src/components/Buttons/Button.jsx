import { PropTypes } from 'prop-types';
import { ButtonStyled } from './ButtonLink.styled';

const Button = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

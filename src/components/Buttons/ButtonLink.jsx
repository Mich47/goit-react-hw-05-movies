import { PropTypes } from 'prop-types';
import { ButtonLinkStyled } from './ButtonLink.styled';

const ButtonLink = ({ to, children }) => {
  return <ButtonLinkStyled to={to}>{children}</ButtonLinkStyled>;
};
export default ButtonLink;

ButtonLink.propTypes = {
  to: PropTypes.shape().isRequired,
  children: PropTypes.string.isRequired,
};

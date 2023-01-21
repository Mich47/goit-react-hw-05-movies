import { LinkStyled } from './ButtonLink.styled';

const ButtonLink = ({ to, children }) => {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};
export default ButtonLink;

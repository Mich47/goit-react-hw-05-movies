import { PropTypes } from 'prop-types';
import { ListItem } from './ListItem';
import { ListStyled } from './List.styled';

export const List = ({ items, setItemContent }) => {
  return (
    <ListStyled>
      {items.map(item => (
        <ListItem key={item.id} item={item} setItemContent={setItemContent} />
      ))}
    </ListStyled>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.instanceOf(
          'An ID must be one of the types: String or Number'
        ),
      ]),
    })
  ),
  setItemContent: PropTypes.func.isRequired,
};

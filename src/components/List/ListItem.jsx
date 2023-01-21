import { PropTypes } from 'prop-types';
import { ListItemStyled } from './List.styled';

export const ListItem = ({ item, setItemContent }) => {
  return <ListItemStyled>{setItemContent(item)}</ListItemStyled>;
};

ListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  setItemContent: PropTypes.func.isRequired,
};

import { Link } from 'react-router-dom';
import TLinkItem from '../../../lib/types/TLinkItem';
import { NavListItem } from './NavItem.styled';

const NavItem = ({ link, text }: TLinkItem) => {
  return (
    <NavListItem>
      <Link to={link}>{text}</Link>
    </NavListItem>
  );
};

export default NavItem;

import TLinkItem from '../../../lib/types/TLinkItem';
import { NavListItem } from './NavItem.styled';

const NavItem = ({ link, text }: TLinkItem) => {
  return (
    <NavListItem>
      <a href={link}>{text}</a>
    </NavListItem>
  );
};

export default NavItem;

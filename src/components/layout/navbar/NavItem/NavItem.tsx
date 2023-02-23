import TNavbarItem from '../../../../lib/types/TNavbarItem';
import { NavListItem } from './NavItem.styled';

const NavItem = ({ link, text }: TNavbarItem) => {
  return (
    <NavListItem>
      <a href={link}>{text}</a>
    </NavListItem>
  );
};

export default NavItem;

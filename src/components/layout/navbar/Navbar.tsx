import Logo from './logo/Logo';
import { navbarItems } from './Navbar.content';
import { Nav } from './Navbar.styled';
import NavItem from './NavItem/NavItem';

const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <ul>
        {navbarItems.map(({ link, text }) => (
          <NavItem key={link} link={link} text={text} />
        ))}
      </ul>
    </Nav>
  );
};

export default Navbar;

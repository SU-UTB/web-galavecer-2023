import Logo from './logo/Logo';
import { navbarItems } from './Navbar.content';
import { Header, Nav } from './Navbar.styled';
import NavItem from './navItem/NavItem';

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <Logo />
        <ul>
          {navbarItems.map(({ link, text }) => (
            <NavItem key={link} link={link} text={text} />
          ))}
        </ul>
      </Nav>
    </Header>
  );
};

export default Navbar;

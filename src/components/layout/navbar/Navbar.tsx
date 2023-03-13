import LogoLink from './LogoLink';
import { navbarItems } from './Navbar.content';
import { Header, Nav } from './Navbar.styled';
import NavItem from './NavItem';

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <LogoLink />
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

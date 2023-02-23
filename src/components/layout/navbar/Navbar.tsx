import { navbarItems } from './Navbar.content';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {navbarItems.map(({ link, text }) => (
          <li key={link}>
            <a href={link}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


import { Link } from 'react-router-dom';
import { Navbar, NavLinks, NavLink } from '../styles/HeaderStyles';

const Header = () => {
  return (
    <Navbar>
      <NavLinks>
        <NavLink><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Coffee</Link></NavLink>
        <NavLink><Link to="/ingredients" style={{ color: 'white', textDecoration: 'none' }}>Ingredients</Link></NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;

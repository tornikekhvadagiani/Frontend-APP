
import styled from 'styled-components';

export const Navbar = styled.nav`
  background-color: #007bff;
  padding: 1rem;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const NavLink = styled.li`
  font-size: 1.2rem;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
      color: #ffa726;
    }
  }
`;

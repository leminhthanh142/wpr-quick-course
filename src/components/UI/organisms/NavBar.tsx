import React from "react";
import styled from "styled-components";
import { LeftNavbar } from "../mocules/LeftNavBar";
import { RightNavbar } from "../mocules/RightNavBar";

export const Navbar = () => (
  <Nav>
    <NavbarList>
      <LeftNavbar />
    </NavbarList>

    <NavbarList>
      <RightNavbar />
    </NavbarList>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
`;

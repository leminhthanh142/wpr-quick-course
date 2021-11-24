import React from "react";
import styled from "styled-components/macro";
import { LeftNavbar } from "../../mocules/LeftNavBar";
import { RightNavbar } from "../../mocules/RightNavBar";
import { mediaQueryMobile, mediaQueryTablet, mediaQueryTabletPortrait } from "../../../../shared/media";

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

  ${mediaQueryTabletPortrait(`
    display: none;
    max-width: 800px;
    width: 100%;
  `)}

  ${mediaQueryMobile(`
    display: none;
  `)}
`;

const NavbarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
`;

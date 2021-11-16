import React from 'react';
import styled from 'styled-components';
import { LeftNavbar } from '../Navbar/LeftNavbar';
import { RightNavbar } from '../Navbar/RightNavbar';

export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarList>
                    <LeftNavbar />
                </NavbarList>

                <NavbarList>
                    <RightNavbar />
                </NavbarList>
            </Nav>
        </>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
`

const NavbarList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 4px 0 0 0;
`
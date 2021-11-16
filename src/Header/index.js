import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { Search } from './Search';

const Header = () => {
    return (
        <HeaderStyle>
            <Grid>
                <Navbar />
                <Search />
            </Grid>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.header`
    height: 120px;
    background-image: linear-gradient(0, #ee4d2d, #f53d2d);
`;

const Grid = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export default Header;
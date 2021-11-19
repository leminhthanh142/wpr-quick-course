import React from "react";
import styled from "styled-components";
import { Navbar } from "../../UI/organisms/NavBar";
import { Search } from "../../UI/mocules/SearchBox";

export const Header = () => (
  <HeaderStyle>
    <Grid>
      <Navbar />
      <Search />
    </Grid>
  </HeaderStyle>
);

const HeaderStyle = styled.header`
  height: 120px;
  background-image: linear-gradient(0, #ee4d2d, #f53d2d);
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

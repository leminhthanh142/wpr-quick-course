import React from "react";
import styled from "styled-components/macro";
import { Navbar } from "../../UI/organisms/NavBar";
import { Search } from "../../UI/mocules/SearchBox";
import {
  mediaQueryTabletPortrait,
  mediaQueryDesktop,
  mediaQueryMobile,
  mediaQueryTablet,
} from "../../../shared/media";

type HeaderProps = {
  color?: string;
};

export const Header = ({ color }: HeaderProps) => (
  <HeaderStyle color={color}>
    <Grid>
      <Navbar />
      <Search />
    </Grid>
  </HeaderStyle>
);

const HeaderStyle = styled.header`
  height: 120px;
  background-image: linear-gradient(rgb(243, 65, 54), rgb(252, 101, 61));

  ${mediaQueryTablet(`
    min-width: 960px;
    width: 100%;
  `)}

  ${mediaQueryTabletPortrait(`
    min-width: 800px;
    width: 100%;
    height: 90px;
  `)}

  ${mediaQueryMobile(`
    height: 90px;
  `)}
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

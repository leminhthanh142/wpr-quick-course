import React, { useMemo, useState } from "react";
import styled from "styled-components/macro";
import { Navbar } from "../../UI/organisms/NavBar";
import { Search } from "../../UI/mocules/SearchBox";
import {
  mediaQueryTabletPortrait,
  mediaQueryMobile,
  mediaQueryTablet,
} from "../../../shared/media";
import { SearchList } from "../../UI/mocules/SearchList";
import { useProductList } from "../../../hooks/productContext";
import { ProductData } from "../../../types/product";

type HeaderProps = {
  color?: string;
};

export const Header = ({ color }: HeaderProps) => {
  const { productList } = useProductList();
  const [searchText, setSearchText] = useState("");

  const handleSearchText = (text: string) => {
    setSearchText(text);
  };

  const filteredList = useMemo(() => productList.filter((product) => {
    if (!searchText) return product;
    return product.title.toLowerCase().includes(searchText.toLowerCase());
  }), [productList, searchText]);

  return (
    <HeaderStyle color={color}>
      <Grid>
        <Navbar />
        <Search onSearch={handleSearchText} />
        <SearchList list={filteredList} />
      </Grid>
    </HeaderStyle>
  );
};

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

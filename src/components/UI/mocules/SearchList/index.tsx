import React from "react";
import styled from "styled-components/macro";
import { ProductData } from "../../../../types/product";

interface SearchListProps {
  list: ProductData[]
}

export const SearchList = ({ list }: SearchListProps) => (
  <Wrapper>
    {list.map((item) => (
      <p>{item.title}</p>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  position: absolute;
  z-index: 9999;
  background: white;
`;

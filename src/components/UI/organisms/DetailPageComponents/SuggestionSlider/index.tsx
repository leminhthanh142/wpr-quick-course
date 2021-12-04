import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components/macro";
import SuggestCard from "../../../mocules/SuggestCard";
import { ProductData } from "../../../../../types/product";
import { NextButton, PrevButton } from "../../../atoms/Buttons";
import {
  scrollLeft,
  scrollRight,
} from "../../../../../GlobalFunctions/SliderScroll";

export const SuggestionSlider: React.FC<{ suggestData: string }> = ({
  suggestData,
}) => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [onPrev, setOnPrev] = useState<boolean>(true);
  const fetchSuggestion = async () => {
    try {
      const res = await axios.get(`${suggestData}`);
      setProducts(res.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <Container>
      <div className="scrollHidden">
        {onPrev ? (
          <NextButton
            onClick={(e: React.MouseEvent) => {
              scrollRight(e);
              setOnPrev(false);
            }}
          />
        ) : (
          <PrevButton
            onClick={(e: React.MouseEvent) => {
              scrollLeft(e);
              setOnPrev(true);
            }}
          />
        )}
        <Grid columns={products.length}>
          {products.map((item) => (
            <SuggestCard
              key={item.id}
              title={item.title}
              imgLink={item.image}
              price={item.price}
              productSold={100}
              discountPercent={20}
              linkTo={`/product/${item.id}`}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  
  &:hover .btn {
    height: 50px;
    width: 50px;
    transform: scale3d(2);
    svg {
      height: 1em;
      width: 1em;
    }
  }
`;
const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 150px)`};
  gap: 0 5px;
`;

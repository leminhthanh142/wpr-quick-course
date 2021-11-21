import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { nanoid } from "nanoid";
import Button from "../../atoms/Buttons";
import FlashSaleCard from "../../mocules/FSaleCard";

export const FlashSalePanel = () => {
  const [onPrev, setOnPrev] = useState(true);
  const scrollLeft = () => {
    const slider = document.querySelector(".saleScrollBarHidden");
    slider!.scrollLeft = 0;
    setOnPrev(true);
  };
  const scrollRight = () => {
    const slider = document.querySelector(".saleScrollBarHidden");
    slider!.scrollLeft = slider!.scrollWidth;
    setOnPrev(false);
  };
  useEffect(() => {
    const prevBtn = document.querySelector(".fsale-btn-left.fsale-btn");
    const nextBtn = document.querySelector(".fsale-btn-right.fsale-btn");
    if (onPrev) {
      prevBtn!.setAttribute("style", "opacity: 0");
      nextBtn!.setAttribute("style", "opacity: 1");
    } else {
      prevBtn!.setAttribute("style", "opacity: 1");
      nextBtn!.setAttribute("style", "opacity: 0");
    }
  });
  return (
    <Container className="catagory">
      <div className="title">
        <div className="flash-sale-title" />
      </div>
      <div className="saleScrollBarHidden">
        <Button
          onClick={scrollLeft}
          className="fsale-btn-left fsale-btn"
          isPrevButton
          position="0"
        />
        <Button
          onClick={scrollRight}
          className="fsale-btn-right fsale-btn"
          isPrevButton={false}
          position="100%"
        />
        <Grid columns={DATAs.length}>
          {DATAs.map((data) => (
            <FlashSaleCard
              key={data.id}
              imgLink={data.imgLink}
              discountImg={data.discountTag}
              price={data.price}
              productSold={data.productSold}
              productTotal={data.productTotal}
              discount={data.discount}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background: white;
  margin-top: 20px;
  border-radius: 5px;
  padding-bottom: 20px;
  & .title {
    height: 60px;
    line-height: 1.875rem;
    padding: 15px;
    position: relative;
    display: inline-flex;
    pointer-events: all;
    .flash-sale-title {
      padding-left: 16px;
      width: 130px;
      height: 40px;
      line-height: 40px;
      text-transform: uppercase;
      display: inline-block;
      background: url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/fb1088de81e42c4e538967ec12cb5caa.png")
        50% no-repeat;
      background-size: contain;
    }
  }
  & .saleScrollBarHidden {
    overflow-x: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  & .fsale-btn {
    z-index: 10;
  }
  &:hover .fsale-btn {
    height: 50px;
    width: 50px;
    transform: translate(-50%, 0);
    svg {
      height: 1em;
      width: 1em;
    }
  }
`;
const Grid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 205px)`};
  grid-template-rows: 240px;
  gap: 0 5px;
  border-top: 1px solid #eee;
`;
const DATAs = [
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
  {
    id: nanoid(),
    discount: 23,
    productSold: 6,
    productTotal: 16,
    price: 229900,
    imgLink: "https://cf.shopee.vn/file/899eca9fa55fb454675411c9a8a1a8c3_tn",
    discountTag:
      "https://cf.shopee.vn/file/6b9c360260cdda751636a84b3b7f27df_tn",
  },
];

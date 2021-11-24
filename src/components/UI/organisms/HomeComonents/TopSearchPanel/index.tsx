import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { TopCard } from "../../../mocules/HomeCompnents/TopSearchCard";
import { NextButton, PrevButton } from "../../../atoms/Buttons";
import {
  scrollLeft,
  scrollRight,
} from "../../../../../GlobalFunctions/SliderScroll";

export const TopSearchBar = () => {
  const [onPrev, setOnPrev] = useState(true);
  return (
    <Container className="catagory">
      <div className="title">
        <p>TÌM KIẾM HÀNG ĐẦU</p>
      </div>
      <div className="scrollHidden">
        {onPrev ? (
          <NextButton
            onClick={(e: any) => scrollRight(e, () => setOnPrev(false))}
          />
        ) : (
          <PrevButton
            onClick={(e: any) => scrollLeft(e, () => setOnPrev(true))}
          />
        )}
        <Grid columns={DATAs.length}>
          {DATAs.map((data, i) => (
            <TopCard
              key={i}
              title={data.title}
              imgLink={data.imgLink}
              revenue={data.revenue}
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
  padding-bottom: 5px 10px 20px;
  & .title {
    height: 60px;
    line-height: 1.875rem;
    padding: 15px;
    p {
      color: #ee4d2d;
    }
  }
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
  grid-template-columns: ${(props) => `repeat(${props.columns}, 205px)`};
  grid-template-rows: 280px;
  border-top: 1px solid #eee;
`;
const DATAs = [
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 94,
    title: "Nước Tẩy Trang L'Oreal 3 in 1",
    imgLink: "https://cf.shopee.vn/file/569f5566d9c55f4b3fa34d70e0d5acc3_tn",
  },
  {
    revenue: 81,
    title: "Quần Ống Rộng Nữ",
    imgLink: "https://cf.shopee.vn/file/46f4a1c42ce6c897c179817f956bea8f_tn",
  },
  {
    revenue: 65,
    title: "Dây Sạc Iphone",
    imgLink: "https://cf.shopee.vn/file/0c50b02044d1851a20d0eea88a69146f_tn",
  },
  {
    revenue: 45,
    title: "Bút Mực Gel",
    imgLink: "https://cf.shopee.vn/file/7a13f189b4b245f3bc72b89957688ad2_tn",
  },
  {
    revenue: 74,
    title: "Tai Nghe Nhét Tai",
    imgLink: "https://cf.shopee.vn/file/e75ede508e8ef1468768a98f1541ba4b_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
  {
    revenue: 168,
    title: "Ốp Lưng Iphone",
    imgLink: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a_tn",
  },
];

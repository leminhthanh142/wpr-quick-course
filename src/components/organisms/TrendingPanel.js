import React from "react";
import styled from "styled-components";
import ProductCard from "../atoms/ProductCard";
let DATAs = [
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/4e32311e7d872547962d1867d39c9027_xhdpi",
    content: "Tech Zone - Siêu Thị Điện Tử",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
    content: "Hoàn Xu 10%-Đơn Từ 0Đ",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
    content: "Gì Cũng Rẻ-Từ 1K",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
    content: "Nạp Thẻ, Hóa Đơn & E-voucher",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/07ee4296b0a33885418670f2e3ffeca0_xhdpi",
    content: "Freeship",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/765ca66457ec08802f74c529f71a99b7_xhdpi",
    content: "Hàng Hiệu -50%",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/29961f92098bc9153b88332110a91c87_xhdpi",
    content: "Hàng Quốc Tế - Deal Đồng Giá",
  },
  {
    pageLink: "https://www.google.com.vn/",
    imgLink: "https://cf.shopee.vn/file/0a3e3aa16b083d6b7e2c25a8f2c16731_xhdpi",
    content: "Shopee Premium",
  },
];
const TrendingPanel = () => {
  return (
    <Trendings>
      {DATAs.map((data, i) => {
        return (
          <ProductCard
            key={i}
            imgSize="50px"
            PageLink={data.pageLink}
            imgLink={data.imgLink}
            content={data.content}
          />
        );
      })}
    </Trendings>
  );
};
export default TrendingPanel;
const Trendings = styled.div`
  display: flex;
  padding: 20px;
`;

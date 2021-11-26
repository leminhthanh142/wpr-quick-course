import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import axios from "axios";
import SuggestCard from "../../../mocules/SuggestCard";
import { ProductData } from "../../../../../types/product";
import {
  mediaQueryDesktop,
  mediaQueryTablet,
  mediaQueryTabletPortrait,
  mediaQueryMobile,
} from "../../../../../shared/media";
import { useProductList } from "../../../../../hooks/productContext";

export const Suggestion = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const { handleSetProductList } = useProductList();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://619a6e572782760017445234.mockapi.io/product`,
      );
      setProducts(res.data);
      handleSetProductList(res.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <Container>
      <Title>
        <p>GỢI Ý HÔM NAY</p>
        <img
          src="https://cf.shopee.vn/file/2163de8eb4ee4c25db0c9ba6f5d47cba"
          alt="sale-tab"
        />
      </Title>
      <Grid>
        {products.map((item) => (
          <SuggestCard
            key={item.id}
            title={item.title}
            imgLink={item.imgLink}
            price={item.price}
            productSold={item.productSold}
            discountPercent={item.discount}
            linkTo={`/product/${item.id}`}
          />
        ))}
      </Grid>
      <a href="https://google.com.vn" className="readmore">
        <div>Xem Thêm</div>
      </a>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 20px;
  & .readmore {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 60px;
    div {
      background: white;
      width: 400px;
      padding: 10px;
      text-align: center;
      color: #555;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 3%);
      :hover {
        background: #ddd;
        outline: solid 1px #bbb;
      }
    }
  }
`;
const Title = styled.div`
  background: white;
  display: flex;
  align-items: center;
  & p {
    display: inline-block;
    width: 200px;
    height: 100%;
    text-align: center;
    line-height: 100%;
    border-bottom: 3px solid #ee4d2d;
    color: #ee4d2d;
    padding: 20px;
  }
  & img {
    display: inline-block;
    width: 200px;
    height: 100%;
  }
`;
const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  ${mediaQueryDesktop(`grid-template-columns: repeat(5,1fr);`)}
  ${mediaQueryTablet(`grid-template-columns: repeat(4,1fr);`)}
  ${mediaQueryTabletPortrait(`grid-template-columns: repeat(3,1fr);`)}
  ${mediaQueryMobile(`grid-template-columns: repeat(2,1fr);`)}
`;
// export const products = [
//   {
//     title:
//       "Mũ lưỡi trai ❤️ Nón kết thêu chữ Memorie phong cách Ulzzang form unisex nam nữ N01",
//     imgLink: "https://cf.shopee.vn/file/b2612c1a8242069aced2f2f26b592f38_tn",
//     price: 45000,
//     productSold: 39.7,
//     discount: 22,
//     id: 1,
//   },
//   {
//     title: "Áo khoác Provip",
//     imgLink: "https://cf.shopee.vn/file/394ed88df2bf7211c65b1871147bd7a4_tn",
//     price: 12000,
//     productSold: 4.6,
//     discount: 50,
//     id: 2,
//   },
//   {
//     title: "Sáp thơm dã man",
//     imgLink: "https://cf.shopee.vn/file/6454e68e2dd55f586ee0719feb4150cd_tn",
//     price: 35000,
//     productSold: 0.1,
//     discount: 40,
//     id: 3,
//   },
//   {
//     title: "Nước tẩy trang L'Oreal",
//     imgLink: "https://cf.shopee.vn/file/1a936a7f7352c65e84d1e96bb3e8d827_tn",
//     price: 47000,
//     productSold: 10,
//     discount: 10,
//     discountImg: "https://cf.shopee.vn/file/473d772abb741a21abece2d53db720e6",
//     id: 4,
//   },
//   {
//     title: "Ốp lưng iphone B@R trong cạnh vuông",
//     imgLink: "https://cf.shopee.vn/file/de5913553f87a3a435adab0f0f6872a4_tn",
//     price: 9000,
//     productSold: 4.6,
//     discount: 50,
//     discountImg: "https://cf.shopee.vn/file/1945c74cbbeefb9b559b338026c0ed0d",
//     id: 5,
//   },
//   {
//     title: "Kính Điệu Ghê Gúm",
//     imgLink: "https://cf.shopee.vn/file/5d37a2bad7aa1fab32359216f29f1c5a_tn",
//     price: 6000,
//     productSold: 1.6,
//     discount: 32,
//     discountImg: "https://cf.shopee.vn/file/60118f48195836101a7cafc0b9fced2f",
//     id: 6,
//   },
//   {
//     title: "Áo khoác Provip",
//     imgLink: "https://cf.shopee.vn/file/394ed88df2bf7211c65b1871147bd7a4_tn",
//     price: 12000,
//     productSold: 4.6,
//     discount: 50,
//     id: 7,
//   },
//   {
//     title: "Sáp thơm dã man",
//     imgLink: "https://cf.shopee.vn/file/6454e68e2dd55f586ee0719feb4150cd_tn",
//     price: 35000,
//     productSold: 0.1,
//     discount: 40,
//     id: 8,
//   },
//   {
//     title: "Nước tẩy trang L'Oreal",
//     imgLink: "https://cf.shopee.vn/file/1a936a7f7352c65e84d1e96bb3e8d827_tn",
//     price: 47000,
//     productSold: 10,
//     discount: 10,
//     discountImg: "https://cf.shopee.vn/file/473d772abb741a21abece2d53db720e6",
//     id: 9,
//   },
//   {
//     title:
//       "Mũ lưỡi trai ❤️ Nón kết thêu chữ Memorie phong cách Ulzzang form unisex nam nữ N01",
//     imgLink: "https://cf.shopee.vn/file/b2612c1a8242069aced2f2f26b592f38_tn",
//     price: 45000,
//     productSold: 39.7,
//     discount: 22,
//     id: 10,
//   },
//   {
//     title: "Ốp lưng iphone B@R trong cạnh vuông",
//     imgLink: "https://cf.shopee.vn/file/de5913553f87a3a435adab0f0f6872a4_tn",
//     price: 9000,
//     productSold: 4.6,
//     discount: 50,
//     discountImg: "https://cf.shopee.vn/file/1945c74cbbeefb9b559b338026c0ed0d",
//     id: 11,
//   },
//   {
//     title: "Kính Điệu Ghê Gúm",
//     imgLink: "https://cf.shopee.vn/file/5d37a2bad7aa1fab32359216f29f1c5a_tn",
//     price: 6000,
//     productSold: 1.6,
//     discount: 32,
//     discountImg: "https://cf.shopee.vn/file/60118f48195836101a7cafc0b9fced2f",
//     id: 12,
//   },
//   {
//     title: "Áo khoác Provip",
//     imgLink: "https://cf.shopee.vn/file/394ed88df2bf7211c65b1871147bd7a4_tn",
//     price: 12000,
//     productSold: 4.6,
//     discount: 50,
//     id: 13,
//   },
//   {
//     title: "Sáp thơm dã man",
//     imgLink: "https://cf.shopee.vn/file/6454e68e2dd55f586ee0719feb4150cd_tn",
//     price: 35000,
//     productSold: 0.1,
//     discount: 40,
//     id: 14,
//   },
//   {
//     title: "Nước tẩy trang L'Oreal",
//     imgLink: "https://cf.shopee.vn/file/1a936a7f7352c65e84d1e96bb3e8d827_tn",
//     price: 47000,
//     productSold: 10,
//     discount: 10,
//     discountImg: "https://cf.shopee.vn/file/473d772abb741a21abece2d53db720e6",
//     id: 15,
//   },
//   {
//     title: "Ốp lưng iphone B@R trong cạnh vuông",
//     imgLink: "https://cf.shopee.vn/file/de5913553f87a3a435adab0f0f6872a4_tn",
//     price: 9000,
//     productSold: 4.6,
//     discount: 50,
//     discountImg: "https://cf.shopee.vn/file/1945c74cbbeefb9b559b338026c0ed0d",
//     id: 16,
//   },
//   {
//     title: "Kính Điệu Ghê Gúm",
//     imgLink: "https://cf.shopee.vn/file/5d37a2bad7aa1fab32359216f29f1c5a_tn",
//     price: 6000,
//     productSold: 1.6,
//     discount: 32,
//     discountImg: "https://cf.shopee.vn/file/60118f48195836101a7cafc0b9fced2f",
//     id: 17,
//   },
//   {
//     title:
//       "Mũ lưỡi trai ❤️ Nón kết thêu chữ Memorie phong cách Ulzzang form unisex nam nữ N01",
//     imgLink: "https://cf.shopee.vn/file/b2612c1a8242069aced2f2f26b592f38_tn",
//     price: 45000,
//     productSold: 39.7,
//     discount: 22,
//     id: 18,
//   },
//   {
//     title:
//       "Mũ lưỡi trai ❤️ Nón kết thêu chữ Memorie phong cách Ulzzang form unisex nam nữ N01",
//     imgLink: "https://cf.shopee.vn/file/b2612c1a8242069aced2f2f26b592f38_tn",
//     price: 45000,
//     productSold: 39.7,
//     discount: 22,
//     id: 19,
//   },
//   {
//     title: "Áo khoác Provip",
//     imgLink: "https://cf.shopee.vn/file/394ed88df2bf7211c65b1871147bd7a4_tn",
//     price: 12000,
//     productSold: 4.6,
//     discount: 50,
//     id: 20,
//   },
//   {
//     title: "Sáp thơm dã man",
//     imgLink: "https://cf.shopee.vn/file/6454e68e2dd55f586ee0719feb4150cd_tn",
//     price: 35000,
//     productSold: 0.1,
//     discount: 40,
//     id: 21,
//   },
//   {
//     title: "Nước tẩy trang L'Oreal",
//     imgLink: "https://cf.shopee.vn/file/1a936a7f7352c65e84d1e96bb3e8d827_tn",
//     price: 47000,
//     productSold: 10,
//     discount: 10,
//     discountImg: "https://cf.shopee.vn/file/473d772abb741a21abece2d53db720e6",
//     id: 22,
//   },
//   {
//     title: "Ốp lưng iphone B@R trong cạnh vuông",
//     imgLink: "https://cf.shopee.vn/file/de5913553f87a3a435adab0f0f6872a4_tn",
//     price: 9000,
//     productSold: 4.6,
//     discount: 50,
//     discountImg: "https://cf.shopee.vn/file/1945c74cbbeefb9b559b338026c0ed0d",
//     id: 23,
//   },
//   {
//     title: "Kính Điệu Ghê Gúm",
//     imgLink: "https://cf.shopee.vn/file/5d37a2bad7aa1fab32359216f29f1c5a_tn",
//     price: 6000,
//     productSold: 1.6,
//     discount: 32,
//     discountImg: "https://cf.shopee.vn/file/60118f48195836101a7cafc0b9fced2f",
//     id: 24,
//   },
// ];

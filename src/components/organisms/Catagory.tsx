import React from 'react';
import styled from 'styled-components';
import ProductCard from '../atoms/ProductCard';
import { PrevButton, NextButton } from '../atoms/Buttons';

const ProductCatagory = function () {
  return (
    <Container className="catagory">
      <div className="preventHidden">
        <PrevButton />
        <NextButton />
        <p className="title">DANH MỤC</p>
        <Grid>
          {DATAs.map((data, i) => (
            <ProductCard
              border="0.5px solid #eee"
              key={i}
              imgSize="84px"
              PageLink={data.pageLink}
              imgLink={data.imgLink}
              content={data.content}
            />
          ))}
        </Grid>
      </div>
    </Container>
  );
};
export default ProductCatagory;
const Container = styled.div`
  position: relative;
  background: white;
  margin-top: 20px;
  border-radius: 5px;
  & .title {
    font-size: 1em;
    color: gray;
    padding: 20px;
  }
  & .preventHidden {
    overflow-x: scroll;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 125px);
  grid-template-rows: 140px 140px;
`;
//---------------------------------
let DATAs = [
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn',
    content: 'Thời Trang Nam',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn',
    content: 'Điện Thoại & Phụ Kiện ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn',
    content: 'Thiết Bị Điện Tử',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn',
    content: 'Máy Tính & Laptop',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn',
    content: 'Máy Ảnh & Máy Quay Phim',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn',
    content: 'Đồng Hồ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn',
    content: 'Giày Dép Nam',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn',
    content: 'Thiết Bị Điện Gia Dụng',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn',
    content: 'Thể Thao & Du Lịch',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn',
    content: 'Ô Tô & Xe Máy & Xe Đạp',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn',
    content: 'Balo & Túi Ví Nam',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn',
    content: 'Đồ Chơi',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn',
    content: 'Chăm Sóc Thú Cưng',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn',
    content: 'Thời Trang Nữ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn',
    content: 'Mẹ & Bé',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn',
    content: 'Nhà Cửa & Đời Sống',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/c765998fda99b2be9eb6e348df29af28_tn',
    content: 'Sắc Đẹp',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/bf87b50b463f646bb7fb8a1a606d9ed2_tn',
    content: 'Sức Khỏe',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn',
    content: 'Giày Dép Nữ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn',
    content: 'Túi Ví Nữ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn',
    content: 'Phụ Kiện & Trang Sức Nữ',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn',
    content: 'Bách Hóa Online',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn',
    content: 'Nhà Sách Online',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn',
    content: 'Thời Trang Trẻ Em',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn',
    content: 'Giặt Giũ & Chăm Sóc Nhà Cửa',
  },
  {
    pageLink: 'https://www.google.com.vn/',
    imgLink: 'https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn',
    content: 'Voucher & Dịch Vụ',
  },
];

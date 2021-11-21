import React from "react";
import styled from "styled-components/macro";

export const Footer = () => (
  <Wrapper>
    <Shrink>
      <SubFooter>
        <Item>
          <p>CHĂM SÓC KHÁCH HÀNG</p>
          <ul>
            {customerService.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </Item>
        <Item>
          <p>VỀ SHOPEE</p>
          <ul>
            {aboutShopee.map((item, i) => (
              <li key={i}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </Item>
        <Item>
          <p>THEO DÕI CHÚNG TÔI TRÊN</p>
          <li>
            <a href="https://google.com.vn">Facebook</a>
          </li>
          <li>
            <a href="https://google.com.vn">Instagram</a>
          </li>
          <li>
            <a href="https://google.com.vn">LinkedIn</a>
          </li>
        </Item>
        <Item>
          <p>TẢI ỨNG DỤNG SHOPEE NGAY THÔI</p>
          <Download>
            <img
              src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
              alt="QRcode"
              className="QRcode"
            />
            <div>
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                alt="app-store"
              />
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                alt="google-play"
              />
              <img
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                alt="app-gallery"
              />
            </div>
          </Download>
        </Item>
      </SubFooter>
    </Shrink>
    <PolicyFooter>
      <div className="policies">
        <a href="https://google.com.vn">CHÍNH SÁCH BẢO MẬT</a>
        <a href="https://google.com.vn">QUY CHẾ HOẠT ĐỘNG</a>
        <a href="https://google.com.vn">CHÍNH SÁCH VẬN CHUYỂN</a>
        <a href="https://google.com.vn">CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</a>
      </div>
      <div>
        <img
          src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
          alt="registrated"
        />
        <img
          src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
          alt="registrated"
        />
        <img
          src="https://cdn.dangkywebsitevoibocongthuong.com/wp-content/uploads/2018/06/logo.png"
          alt="registrated"
        />
      </div>
      <p className="company-name">Công ty TNHH Shopee</p>
      <p>
        Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai,
        Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ
        trợ: 19001221 - Email: cskh@hotro.shopee.vn
      </p>
      <p>
        Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ:
        024 73081221 (ext 4678)
      </p>
      <p>
        Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp
        lần đầu ngày 10/02/2015
      </p>
      <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
    </PolicyFooter>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5em;
  padding-top: 3em;
  border-top: 5px solid #ee4d2d;
  background: white;
  & li {
    margin-bottom: 15px;
    a {
      color: #555;
      font-size: 12px;
      :hover {
        color: black;
      }
    }
  }
`;

const Shrink = styled.div`
  width: 75%;

  @media (max-width: 1000px) {
    width: 98%;
  } ;
`;

const SubFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  & p {
    font-weight: bold;
    color: #555;
    margin-bottom: 20px;
  }
`;

const Download = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 70%;

  & img {
    display: block;
  }

  & .QRcode {
    width: 47%;
  }

  & div {
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
      width: 80%;
      margin: 10px 0;
    }
  }
`;

const PolicyFooter = styled.div`
  text-align: center;
  background: #eee;
  padding: 3em 2em;
  width: 100%;

  & p {
    margin: 10px;
    font-size: 12px;
    color: #555;
  }

  & .company-name,
  .policies {
    font-size: 14px;

    margin: 20px 0;
    a {
      color: #555;
      margin: 0 10px;
    }
  }

  & img {
    margin: 0 10px;
    width: 120px;
    height: 40px;
  }
`;
const customerService = [
  { title: "Trung Tâm Trợ Giúp", link: "https://google.com.vn" },
  { title: "Shopee Blog", link: "https://google.com.vn" },
  { title: "Shopee Mall", link: "https://google.com.vn" },
  { title: "Hướng Dẫn Mua Hàng", link: "https://google.com.vn" },
  { title: "Hướng Dẫn Bán Hàng", link: "https://google.com.vn" },
  { title: "Thanh Toán", link: "https://google.com.vn" },
  { title: "Shopee Xu", link: "https://google.com.vn" },
  { title: "Vận Chuyển", link: "https://google.com.vn" },
  { title: "Trả Hàng và Hoàn Tiền", link: "https://google.com.vn" },
  { title: "Chăm Sóc Khách Hàng", link: "https://google.com.vn" },
  { title: "Chính sách Bảo Hành", link: "https://google.com.vn" },
];
const aboutShopee = [
  { title: "Giới Thiệu Về Shopee Việt Nam", link: "https://google.com.vn" },
  { title: "Tuyển Dụng", link: "https://google.com.vn" },
  { title: "Điều Khoản Shopee", link: "https://google.com.vn" },
  { title: "Chính Sách Bảo Mật", link: "https://google.com.vn" },
  { title: "Chính Hãng", link: "https://google.com.vn" },
  { title: "Kênh Người Bán", link: "https://google.com.vn" },
  { title: "Flash Sale", link: "https://google.com.vn" },
  { title: "Chương Tình Tiếp Thị Liên Kết", link: "https://google.com.vn" },
  { title: "Liên Hệ Với Truyền Thông", link: "https://google.com.vn" },
];

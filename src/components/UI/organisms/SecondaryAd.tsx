import React from "react";
import styled from "styled-components/macro";

const imgLink = [
  "https://cf.shopee.vn/file/6cf0853b71846eb2ede920aad7d13bbc",
  "https://cf.shopee.vn/file/09bb6b03af94e8f6ea48b9cae0e0afed",
  "https://cf.shopee.vn/file/1e1a1e25fb0282e0634c492971bd6423",
];
const CompositeAds = () => (
  <Container>
    {imgLink.map((img) => (
      <a href="https://www.google.com.vn/">
        <img src={img} alt="advertisement" />
      </a>
    ))}
    <div className="overlay" />
  </Container>
);
export default CompositeAds;
const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  & a {
    flex: 1;
    width: 33%;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
    }
  }
`;

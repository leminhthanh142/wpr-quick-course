import React from "react";
import styled from "styled-components";

const CompositeAds = () => (
  <Container>
    <a href="https://www.google.com.vn/">
      <img
        src="https://cf.shopee.vn/file/6cf0853b71846eb2ede920aad7d13bbc"
        alt="advertisement"
      />
      <img
        src="https://cf.shopee.vn/file/09bb6b03af94e8f6ea48b9cae0e0afed"
        alt="advertisement"
      />
      <img
        src="https://cf.shopee.vn/file/1e1a1e25fb0282e0634c492971bd6423"
        alt="advertisement"
      />
    </a>
    <div className="overlay" />
  </Container>
);
export default CompositeAds;
const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  & a {
    display: flex;
  }
  & img {
    display: block;
    flex: 1;
    width: 32%;
    height: 100%;
    object-fit: cover;
  }
`;

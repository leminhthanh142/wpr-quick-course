import React from "react";
import styled from "styled-components/macro";

const Ad = styled.a`
  position: fixed;
  display: inline-block;
  background: url("https://cf.shopee.vn/file/f630b99bef39b0226e962ba7d6750e68");
  bottom: 100px;
  right: 35px;
  width: 82px;
  height: 82px;
  @media (max-width: 768px) {
    bottom: 60px;
  }
`;

const Popup = function () {
  return <Ad />;
};

export default Popup;

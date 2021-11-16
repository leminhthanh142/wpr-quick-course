import React from 'react';
import styled from 'styled-components';

const AdPanel = function () {
  return (
    <Container>
      <a href="https://www.google.com.vn/">
        <img
          src="https://cf.shopee.sg/file/204ca3ec83981dbfa455adbe11776a1c"
          alt="poster"
        />
      </a>
      <div className="overlay" />
    </Container>
  );
};
export default AdPanel;
const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  & a {
    display: block;
  }
  & img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
  }
`;

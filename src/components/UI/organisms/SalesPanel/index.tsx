import React from "react";
import styled from "styled-components/macro";
import { Poster } from "../../mocules/Poster";
import { mediaQueryDesktop, mediaQueryTablet } from "../../../../shared/media";

export const SalesPanel = () => (
  <Container>
    <Poster
      posterHeight="50%"
      directTo="https://www.google.com.vn/"
      imgLink="https://cf.shopee.sg/file/8e6f1eaee9064f31e972063334617382_xhdpi"
    />
    <Poster
      posterHeight="50%"
      margin="5px 0 0 0"
      directTo="https://www.google.com.vn/"
      imgLink="https://cf.shopee.sg/file/eeccd36d97cb91c220889925228a1536_xhdpi"
    />
  </Container>
);

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

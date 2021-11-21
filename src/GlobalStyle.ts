import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: Arial, Helvetica, sans-serif;
}

  html {
    background: #eee;
    height: 200vh;
  }

.swiper-slide {
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
  li {
    list-style:none;
  }

  a {
    text-decoration:none;
  }

  .swiper-container {
    height: 100%;
  }

  .swiper-slide {
    width: 100%;
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`;
